import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { userActions } from "../store/slices/userSlice";

const UserLayout = () => {
  const userData = useSelector((state) => state.userData);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUserMenu() {
    setShowDropdown((showDropdown) => !showDropdown);
  }

  function onLogout() {
    dispatch(userActions.logout());
    setShowDropdown((showDropdown) => !showDropdown);
    navigate("/login");
  }

  return (
    <div className="flex flex-col gap-3">
      <header className="py-4 px-12 bg-green-100">
        <nav className="flex justify-between ">
          <div>
            <ul className="flex gap-2 text-yellow-600">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-900 p-1.5 rounded-lg bg-blue-200"
                      : "p-1.5"
                  }
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-800 p-1.5 rounded-lg bg-blue-200"
                      : "p-1.5"
                  }
                  to="store"
                >
                  Store
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-red-400">
            <button onClick={handleUserMenu}>{userData.userName}</button>
            {showDropdown && (
              <div className="text-center absolute top-11 right-2 z-20 w-48 rounded-md border bg-white shadow-2xl">
                <ul className="flex flex-col gap-2 m-2">
                  <li>Profile</li>
                  <hr />
                  <li>
                    <button onClick={onLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
