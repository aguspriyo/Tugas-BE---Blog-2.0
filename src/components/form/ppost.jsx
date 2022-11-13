import axios from "axios";
import { useEffect, useState } from "react";

const Ppost = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [loadPpost, setPpost] = useState([]);
  const BASE_URL = "https://jcc.brandingyou.id/api/";
  const token = localStorage.getItem("token");

const [title, setTitle]=useState('')
const [content, setContent]=useState('')
const [image, setImage]=useState()
const [editId, setEditId] =useState()



  const upload = (e) => {
    e.preventDefault();
    // console.log("tot");
    const data = new FormData();
    data.append("title",title);
    data.append("content",content);
    data.append("image",image);

if(isEdit === true){
  axios
      .post(`${BASE_URL}post/${editId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        setIsEdit(false)
        getPost();
      })
      .catch(function (error) {
        console.log(error);

      });
      setContent('')
      setTitle('')
      document.getElementById('Postimage').value=""

}else{

  axios
    .post(`${BASE_URL}post`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      getPost();
    })
    .catch(function (error) {
      console.log(error);
    });
    setTitle('')
    setContent('')
    document.getElementById('Postimage').value=""
};
}

  const getPost = async () => {
    await axios
      .get(`${BASE_URL}post`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        // console.log(response.data.data);
        setPpost(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    // let ignore = false;
    // if (!ignore) {
    // setInterval(() => {
    getPost();
    // }, 5000);
    // }
    // return () => {
    //   ignore = true;
    // };
  }, []);

  const handleRemove = (id) => {
    axios.delete(`https://jcc.brandingyou.id/api/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    getPost();
  };

  const handleEdit = (id) => {
    setIsEdit(true);

    axios
      .get(`https://jcc.brandingyou.id/api/post/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data.data.author);
        setTitle(response.data.data.title);
        setContent(response.data.data.content);
        setEditId(id)
        console.log(id);

      });
  };

  return (
    <>
      <div className="container mt-5 my-5 py-5">
        <form onSubmit={upload}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />
            <label htmlFor="formId1">Title</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="content"
              id="content"
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
            />
            <label htmlFor="formId1">Article</label>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Choose file
            </label>
            <input
              type="file"
              accept=".jpg, .png"
              className="form-control"
              name="image"
              id="Postimage"
              aria-describedby="fileHelpId"
              onChange={(e) =>
                setImage(e.target.files[0])
              }
            />
          </div>

          <button className="btn btn-warning">Upload</button>
        </form>
      </div>

      <div className="container">
        {/* {loadPpost.map((isiUpload) => {
          return <Ppos key={isiUpload.id} title={isiUpload.title} body={isiUpload.content} image={isiUpload.image} id={isiUpload.id} clickRemove={handleRemove} clickEdit={handleEdit} />;
        })} */}
     {/* return ( */}
  {loadPpost.map((isiUpload)=>{
    return   <div key={isiUpload.id} className="card my-5 p-5">
    <div className="row">
      <div className="col-md-5">
        <img className="card-img-top" src={isiUpload.image} alt="img" style={{ width: "200px" }} />
      </div>
      <div className="col-md-6">
        <h1 className="card-title">{isiUpload.title}</h1>
        <hr />
        <p className="card-text">{isiUpload.content}</p>
      </div>
    </div>
    <div className="container text-end ">
      <button onClick={()=>handleEdit(isiUpload.id)} className="btn btn-warning m-2">Edit</button>
      <button onClick={()=>handleRemove(isiUpload.id)} className="btn btn-danger">
        Hapus
      </button>
    </div>
  </div>
  })}

      </div>
    </>
  );
};
export default Ppost;
