import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthenticationContext";

const Navbar = () => {
  const { user, logout } = useAuth(); // Get the user and logout function from the context

  console.log("AuthContext user data:", user); // Log user data

  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "History",
      path: "/history",
    },
    {
      name: user ? "Sign Out" : "Sign In",
      path: user ? "/" : "/signin",
      onClick: user ? logout : null,
    },
  ];

  return (
    <nav className="max-w-6xl mx-auto px-2">
      <div className="flex justify-between items-center py-5">
        <h1>Let&apos;s Play</h1>

        <div className="flex justify-end items-center text-text-color gap-5 md:gap-10">
          {navData.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="group cursor-pointer flex flex-col"
            >
              {item.name}
              <NavLink
                to={item.path}
                className={(navData) =>
                  navData.isActive
                    ? "w-3 group-hover:w-full h-0.5 bg-white transform duration-300"
                    : "w-0 group-hover:w-full h-0.5 bg-white transform duration-300"
                }
              ></NavLink>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
