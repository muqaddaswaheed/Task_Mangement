import { Link, useLocation } from "react-router-dom"; 

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-500 to-teal-500 p-4 shadow-lg">
       <ul className="flex space-x-8 justify-center gap-16">
        <li>
          <Link
            to="/"
            className={`text-white ${
              location.pathname === "/" ? "font-bold italic" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/add-task"
            className={`text-white ${
              location.pathname === "/add-task" ? "font-bold italic" : ""
            }`}
          >
            Add Task
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
