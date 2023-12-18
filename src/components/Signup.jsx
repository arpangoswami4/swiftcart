import { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../util";
import { userActions } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    createUser(formData).then(() => {
      dispatch(userActions.setUser(formData));
      navigate("/");
    });
  }

  function onChangeInput(identifier, value) {
    setFormData((fd) => {
      return { ...fd, [identifier]: value };
    });
  }
  return (
    <div className="flex flex-col items-center text-center gap-12 p-4 bg-cyan-100 w-full min-h-screen">
      <h1 className="text-2xl">Sign-up</h1>
      <div className="flex flex-col gap-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            required={true}
            type="text"
            name="name"
            label="Name"
            onChange={(event) => {
              onChangeInput("name", event.target.value);
            }}
          />
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
            Submit
          </button>
        </form>
        <div>
          <Link to="/login" className="text-blue-700">
            Already have a account,click here to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
