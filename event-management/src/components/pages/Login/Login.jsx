import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, user);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        notifySuccess("Login Successfully");
      })
      .catch((error) => {
        console.error(error);
        notifyError("Invalid email or password");
      });
  };

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold my-8">Sign In Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/signUp">
                    <button className="label-text-alt link link-hover">
                      Dont have account?{" "}
                      <span className="text-blue-700 font-extrabold ">
                        Sign Up
                      </span>
                    </button>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
