const Ppos = (props) => {
  return (
    <div className="card my-5 p-5">
      <div className="row">
        <div className="col-md-5">
          <img className="card-img-top" src={props.image} alt="img" style={{ width: "200px" }} />
        </div>
        <div className="col-md-6">
          <h1 className="card-title">{props.title}</h1>
          <hr />
          <p className="card-text">{props.body}</p>
        </div>
      </div>
      <div className="container text-end ">
        <button onClick={()=>props.clickEdit(props.id)} className="btn btn-warning m-2">Edit</button>
        <button onClick={()=>props.clickRemove(props.id)} className="btn btn-danger">
          Hapus
        </button>
      </div>
    </div>
  );
};
export default Ppos;
