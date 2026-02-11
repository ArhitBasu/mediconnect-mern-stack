import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut, User, Bell } from "lucide-react";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="px-6 py-3 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100">
      {/* Search Bar or Page Title */}
      <div className="hidden md:block">
        <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
          Dashboard Overview
        </h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-700 leading-none">
              {user?.name || "User"}
            </p>
            {/* UPDATED: Dynamic Role Display */}
            <p className="text-[10px] text-indigo-500 font-bold mt-1 uppercase tracking-tighter">
              {user?.role?.toLowerCase() === 'admin' ? 'Administrator' : user?.role || 'Guest'}
            </p>
          </div>
          
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-sm border-2 border-white">
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