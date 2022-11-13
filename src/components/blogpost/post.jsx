import Balmond from '../../asset/img/balmond.jpg'
import { Link } from 'react-router-dom';
// import { Component } from "react";

const Post = (props) => {
    return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card h-100">
                <img className="card-img-top" src={Balmond} alt="img"/>
                    <div className="card-body">
                        <Link className="card-title h5" to={`/post/${props.id}`} style={{textDecoration:"none"}}>{props.title}</Link>
                        <p className="card-text">{props.desc}</p>
                        <div className="d-flex justify-content-center">
                            <button onClick={()=>props.clickRemove(props.id)} className='btn btn-danger m-2'>Remove</button>
                            <button onClick={()=>props.clickEdit(props.id)} className='btn btn-primary m-2'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

// class Axios3 extends Component {
//     render () {
//         return (
//             <div className="container">
//                 <h1 className="text-center">Blog Post</h1>
//                 <div className="mb-3">
//                     <label className="form-label">Title</label>
//                         <input type="text" className="form-control" id="title"></input>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Deskripsi</label>
//                         <input type="text" className="form-control" id="deskripsi"></input>
//                 </div>
//                 <button className='btn btn-primary mb-3' onClick={this.xxx}>Submit</button>
//             </div>
//         )
//     }
// }

export {
    // Axios3,
    Post
}