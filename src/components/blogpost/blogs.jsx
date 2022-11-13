// import { render } from "@testing-library/react";
import { Component } from "react";
import { Post } from "./post";
import axios from "axios";

export default class Blogs extends Component {

    state = {
        posts: [],
        datapost: {
            userId: 1,
            id: null,
            title: '',
            body: ''
        },
        isUbah: false

        // singlepost : {
        //     userId : null,
        //     id : null,
        //     title : '',
        //     body : ''
        // },
    }

    handlerChange = (e) => {
        //console.log(e.target.value);
        let newdatapost = { ...this.state.datapost }
        newdatapost[e.target.id] = e.target.value

        this.setState({
            datapost: newdatapost
        }, () => console.log(this.state.datapost))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.isUbah === true) {
            // Mode Ngedit
            axios.put(`http://localhost:3004/posts/${this.state.datapost.id}`, this.state.datapost)
                .then(res => {
                    this.getData()
                    this.setState({
                        isUbah: false
                    })
                    alert('berhasil diubah')
                    this.setDefaultState()
                })
        } else {
            // Mode Tambah Baru Post
            // Date() buat bikin tanggal, getTime buat nampilin waktu sampe milisecond
            let timestamp = Math.floor(new Date().getTime() / 1000);
            this.setState({
                datapost: {
                    ...this.state.datapost,
                    id: timestamp
                }
            }, () => {
                if (this.state.datapost.title === ""){
                    return alert ('Isi Judul terlebih dahulu')
                } else {
                    axios.post('http://localhost:3004/posts', this.state.datapost)
                        .then(res => {
                            this.getData()
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                        this.setDefaultState()
                    }
            })

            // camelCase = lastName, firstName ==> penamaan variabel biasa
            // PascalCase = LastName, FirstName ==> Penamaan Class
            // snake_Case = last_name, first_name
        }
    }

    setDefaultState = () => {
        this.setState({
        datapost: {
            userId: 1,
            id: null,
            title: '',
            body: ''
            },
        })
        document.getElementById('title').value =''
        document.getElementById('body').value =''
    }

    getData = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((response) => {
                this.setState({
                    posts: response.data
                },console.log(response.status)
                )
            })
    }

    componentDidMount() {
        this.getData()
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json =>
        //     this.setState({
        //         posts : json
        //     })
        //     )

        // axios.get('http://localhost:3004/posts')
        // .then((response) => {
        //     this.setState ({
        //         posts : response.data
        //     })
        // })
    }

    handleRemove = (id) => {
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then(res => {
                this.getData()
                console.log(res);
            })
    }

    handleEdit = (id) => {
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(res => {
                this.setState({
                    datapost: res.data,
                    isUbah: true
                })
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="container">
                <form>
                    <h1 className="text-center mt-5">Blog Post</h1>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input onChange={this.handlerChange} type="text" className="form-control" id="title" value={this.state.datapost.title} ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deskripsi</label>
                        <input onChange={this.handlerChange} type="text" className="form-control" id="body" value={this.state.datapost.body}></input>
                    </div>
                    <button onClick={this.handleSubmit} className='btn btn-primary mb-3'>Submit</button>
                </form>

            {/* Mengambil component dari child */}
            <div className="row">
                    {
                        this.state.posts.map(isipost => {
                            return <Post key={isipost.id} id={isipost.id} clickRemove={this.handleRemove} clickEdit={this.handleEdit} title={isipost.title} desc={isipost.body} />
                        })
                    }
                    {/* <Post /> */}
                </div>
            </div>
        )
    }
}
