import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const { user, createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = e.target.name.value;
    console.log(user, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result);
        notifySuccess("SignUp Successfully");
      })
      .catch((error) => {
        console.error(error);
        notifyError("Invalid email or password");
      });
  };
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-left",
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-left",
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold my-8">Sign Up </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <Link to="/login">
                    <button className="label-text-alt link link-hover">
                      Already have account?{" "}
                      <span className="text-blue-700 font-extrabold ">
                        Sign in
                      </span>
                    </button>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
