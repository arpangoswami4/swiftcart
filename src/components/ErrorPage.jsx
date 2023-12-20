import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  let message = "Page not found";
  const error = useRouteError();
  let buttonElement;
  if (error.status === 401) {
    message = "Please Login or Sign-up to continue";
    buttonElement = (
      <Link to="/login">
        <button className="p-2 mx-16 rounded-lg bg-red-300">Login</button>
      </Link>
    );
  }
  return (
    <div className="flex flex-col gap-3 items-center p-8">
      <div className="text-center text-2xl font-semibold">
        An error occurred
      </div>
      <p className="text-lg mt-4">{message}</p>
      {error.status === 401 && buttonElement}
    </div>
  );
};

export default ErrorPage;
