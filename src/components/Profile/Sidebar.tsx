import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/profile", label: "Profil" },
    { path: "/profile/orders", label: "Sifarişlər" },
    { path: "/profile/security", label: "Təhlükəsizlik" },
  ];


  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); 
    navigate("/auth/login"); 
  };

  return (
    <div className="w-[100%] md:w-[20%]">
      <ul className="w-[100%] grid md:grid-cols-1 md:text-left text-center grid-cols-4">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`p-2 border border-gray-200 cursor-pointer ${
              location.pathname === item.path
                ? "bg-green-400 text-white"
                : "hover:bg-green-400 hover:text-white"
            }`}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
         <li
            onClick={handleLogOut}
            className={`p-2 border border-gray-200 cursor-pointer`}
          >
            Çıxış et
          </li>
      </ul>
    </div>
  );
};

export default Sidebar;
