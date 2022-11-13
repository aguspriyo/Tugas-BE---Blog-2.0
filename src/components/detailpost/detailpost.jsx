import Balmond from '../../asset/img/balmond.jpg'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailPost = () => {

    const {id} = useParams();
    const [title, setTitle] = useState ('');
    const [desc, setDesc] = useState ('')
    // console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:3004/posts/${id}`)
        .then((response) => {
                // console.log(response.data)
                const isipost = response.data
                setTitle(isipost.title);
                setDesc(isipost.body);
            })
        }, [id])

    return (
        <div className="container my-5">
            <div className="card h-100">
                <img className="card-img-top" src={Balmond} alt="img" style={{width:"100%", height: "400px", objectFit: "cover"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div>
        )
    }

export default DetailPost;
