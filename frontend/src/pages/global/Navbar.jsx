import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    //remove the user from the local storage
    logout();
  };

  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "History",
      path: "/history",
    },
    ...(user
      ? []
      : [
          {
            name: "Login",
            path: "/login",
          },
        ]),
  ];

  return (
    <nav className="max-w-6xl z-10  relative mx-auto px-2">
      <div className="flex  justify-between items-center py-5">
        <h1>Let&apos;s Play</h1>

        <div className="flex justify-end items-center text-text-color gap-5 md:gap-10">
          {navData.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={(navData) =>
                navData.isActive
                  ? "cursor-pointer flex flex-col relative  active-nav-link"
                  : "cursor-pointer flex flex-col relative nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {user && (
            <button
              className="bg-white/10 hover:bg-white/40 duration-300 border outline-none px-5 py-2 max-w-fit backdrop-blur-lg text-white"
              onClick={handleClick}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
