import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const BASE_URL = "https://jcc.brandingyou.id/api/";

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [nm, setNama] = useState("");
  const [eml, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // console.log("tot");
    e.preventDefault();

    await axios
      .post(
        `${BASE_URL}register`,
        {
          name: nm,
          username: user,
          email: eml,
          password: pwd,
        },
        {
          headers: {
            // Accept: "application/json",
            // "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        // localStorage.setItem(response);
        navigate('/login')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <main>
        <div className="container " style={{ backgroundColor: "#f8f0f0 ", paddingBottom: "0.5rem" }}>
          <section className="text-center" style={{ marginTop: "150px", marginBottom: "100px" }}>
            <div className="p-5"></div>

            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ marginBottom: "100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: `blur("30px")` }}>
              <div className="card-body py-5 px-md-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="fw-bold mb-5">Register</h2>
                    <form className="form text-start" onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form3Example1">
                            Name
                          </label>
                          <input type="text" id="nama" className="form-control" name="name" placeholder="nama" onChange={(e) => setNama(e.target.value)} value={nm} />
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="">
                          Email address
                        </label>
                        <input type="email" id="email" className="form-control" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={eml} required autoComplete="off"/>
                      </div>

                      <div className="form-outline mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form3Example1">
                            UserName
                          </label>
                          <input type="text" id="usernama" className="form-control" name="username" placeholder="username" onChange={(e) => setUser(e.target.value)} value={user} required />
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="">
                          Password
                        </label>
                        <div className="input-group">
                          <input type="password" id="password" className="form-control" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                          <div className="input-group-addon">
                            <i className="bi bi-eye-slash" id="togglePassword"></i>
                          </div>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-start mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="" />
                        <label className="form-check-label" htmlFor="">
                          Ingat Saya
                        </label>
                      </div>

                      <div className="d-flex gap-2 col-12 mx-auto justify-content-center">
                        <button className="btn btn-primary" type="submit" id="button">
                          Daftar Sekarang
                        </button>
                      </div>

                      <div className="form-outline d-flex justify-content-end">
                        <label className="form-check-label" htmlFor="">
                          {" "}
                          Sudah Punya Akun? <a href="/login">Login</a>{" "}
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Register;
