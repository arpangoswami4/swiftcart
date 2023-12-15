import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex flex-col gap-3">
      <header className="flex justify-items-start	py-4 px-6 bg-green-100 text-yellow-600">
        <nav>
          <ul className="flex gap-2">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-900 p-1.5 rounded-lg bg-blue-200" : "p-1.5"
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
                  isActive ? "text-yellow-800 p-1.5 rounded-lg bg-blue-200" : "p-1.5"
                }
                to="store"
              >
                Store
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
