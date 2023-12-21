import { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../util";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUserAction } from "../store/thunkActions/userThunk";

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loggedIn } = useSelector((state) => state.authData);
  if(loggedIn){
    navigate("/");
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(authenticateUserAction(formData));
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
            name="userEmail"
            label="Email"
            onChange={(event) => {
              onChangeInput("userEmail", event.target.value);
            }}
          />
          <Input
            required={true}
            type="password"
            name="userPassword"
            label="Password"
            onChange={(event) => {
              onChangeInput("userPassword", event.target.value);
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
