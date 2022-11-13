import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const BASE_URL = "https://jcc.brandingyou.id/api/";

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(
        `${BASE_URL}login`,
        {
          username: user,
          password: pwd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        navigate("/Ppost");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container " style={{ backgroundColor: "#f8f0f0 " }}>
        <section className="text-center " style={{ marginTop: "150px", marginBottom: "100px", paddingBottom: "0.5rem" }}>
          <div className="p-5"></div>

          <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ marginBottom: "100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: `blur("30px")` }}>
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                  </p> */}
                  <h2 className="fw-bold mb-5">Login</h2>
                  <form className="form text-start">
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="username">
                        username
                      </label>
                      <input className="form-control" type="text" id="username" autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <div className="input-group">
                        <input type="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} required className="form-control" />
                        {/* <div className="input-group-addon">
                          <i className="bi bi-eye-slash" id="togglePassword"></i>
                        </div> */}
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="" />
                      <label className="form-check-label">Ingat Saya</label>
                    </div>

                    <div className="d-flex gap-2 col-12 mb-4 mx-auto justify-content-center">
                      <button className="btn btn-primary" type="button" id="btLogin" onClick={handleSubmit}>
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div className="form-outline d-flex justify-content-end">
                  <label className="form-check-label ">
                    Belum Punya Akun? <a href="/register">Daftar Sekarang</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login;
