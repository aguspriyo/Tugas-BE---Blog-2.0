import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "../../App";
import Blogs from "../blogpost/blogs";
import DetailPost from "../detailpost/detailpost";
import Login from "../form/login";
import Ppost from "../form/ppost";
import Register from "../form/register";
import Parent from "../parentchild/parent";
import Beranda from "./beranda";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light ">
          <div className="container ">
            <Link className="navbar-brand" href="/">
             <img src="https://yt3.ggpht.com/yp1trey-Evp_gltp6if18LWmAcn8DLU1HIFoJQrCvwryriYZV1-QioBKvJTKtfHUsG0ajcsCgw=s900-c-k-c0x00ffffff-no-rj"width="70" alt="gambar" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item text-center">
                  <Link className="nav-link active" aria-current="page" to="/beranda">
                    Beranda
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link " to="/blog">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link  " to="/app">
                    App
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link " to="/card">
                    Card
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link " to="/Ppost">
                    Post
                  </Link>
                </li>
                <li className="nav-item text-center ">
                  <Link className="nav-link " to="/login">
                    Login
                  </Link>
                </li>
              </ul>

      <button className="btn btn-danger" >logout</button>
    
            </div>
          </div>
        </nav>
        {/* <Blogs /> */}

        <Routes>
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/app" element={<App />} />
          <Route path="/card" element={<Parent />} />
          <Route path="/post/:id" element={<DetailPost />} />
          <Route path="/Ppost" element={<Ppost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
