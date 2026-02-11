import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, User, Calendar, Users, 
  Settings, LogOut, ClipboardList, Clock, 
  Plus, ShieldCheck // Added Plus and ShieldCheck
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAdmin = location.pathname.startsWith("/admin");
  const isDoctor = location.pathname.startsWith("/doctor");
  const isPatient = location.pathname.startsWith("/patient");

  // Determine which menu to show
  const getMenuItems = () => {
    if (isAdmin) {
      return [
        { name: "Admin Panel", path: "/admin", icon: LayoutDashboard },
        { name: "Manage Doctors", path: "/admin/manage-doctors", icon: Users },
        { name: "Manage Patients", path: "/admin/manage-patients", icon: User },
      ];
    }
    if (isDoctor) {
      return [
        { name: "Dashboard", path: "/doctor", icon: LayoutDashboard },
        { name: "Today's Schedule", path: "/doctor/today", icon: Clock },
        { name: "Availability", path: "/doctor/availability", icon: Calendar },
      ];
    }
    // Default to Patient
    return [
      { name: "Dashboard", path: "/patient", icon: LayoutDashboard },
      { name: "Find Doctors", path: "/patient/doctors", icon: Users },
      { name: "My Appointments", path: "/patient/my-appointments", icon: ClipboardList },
      { name: "Medical Profile", path: "/patient/profile", icon: User },
    ];
  };

  const menuItems = getMenuItems();

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 text-indigo-600 font-black text-2xl tracking-tighter">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            {/* Added Plus to imports above to prevent crash */}
            <Plus size={20} strokeWidth={3} />
          </div>
          HealthCore
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                isActive 
                ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-50">
        <button 
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-500 font-bold text-sm transition-colors"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;