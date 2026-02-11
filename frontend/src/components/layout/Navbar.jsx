import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut, User, Bell } from "lucide-react"; // Optional: icons make it feel premium

const Navbar = () => {
  const { logout, user } = useContext(AuthContext); // Assuming 'user' exists in context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="px-6 py-3 flex justify-between items-center bg-white/80 backdrop-blur-md">
      {/* Search Bar or Page Title - Makes the bar feel balanced */}
      <div className="hidden md:block">
        <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
          Dashboard Overview
        </h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Icon - Common UX pattern */}
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell size={20} />
        </button>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-700 leading-none">
              {user?.name || "User Name"}
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">
              Administrator
            </p>
          </div>
          
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-sm">
            <User size={18} />
          </div>

          <button
            onClick={handleLogout}
            className="ml-2 flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
          >
            <LogOut size={18} className="group-hover:translate-x-0.5 transition-transform" />
            <span className="hidden lg:inline">Sign out</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;