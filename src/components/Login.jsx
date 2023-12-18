import { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser, getUsers } from "../util";
import { useDispatch } from "react-redux";
import { userActions } from "../store/slices/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    getUsers().then((userData) => {
      const userIndex = authenticateUser(formData, userData);
      if (userIndex > -1) {
        dispatch(userActions.setUser(userData[userIndex]));
        navigate("/");
      } else {
        alert("Invalid login,please try again");
      }
    });
  }

  function onChangeInput(identifier, value) {
    setFormData((fd) => {
      return { ...fd, [identifier]: value };
    });
  }
  return (
    <div className="flex flex-col items-center text-center gap-12 p-4 bg-cyan-100 w-full min-h-screen">
      <h1 className="text-2xl">Login</h1>
      <div className="flex flex-col gap-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            required={true}
            type="email"
            name="email"
            label="Email"
            onChange={(event) => {
              onChangeInput("email", event.target.value);
            }}
          />
          <Input
            required={true}
            type="password"
            name="password"
            label="Password"
            onChange={(event) => {
              onChangeInput("password", event.target.value);
            }}
          />
          <button className="mt-4 p-2 mx-16 rounded-lg bg-red-300">
            Login
          </button>
        </form>
        <div>
          <Link to="/signup" className="text-blue-700">
            Click Here to Sign-up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
