import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { 
  LayoutDashboard, 
  CalendarPlus, 
  CalendarCheck, 
  UserRound, 
  Stethoscope, 
  Clock, 
  Users,
  ShieldCheck,
  Activity
} from "lucide-react";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const navItemClasses = ({ isActive }) => 
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      isActive 
        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
        : "text-slate-500 hover:bg-indigo-50 hover:text-indigo-600"
    }`;

  return (
    <div className="w-72 bg-white flex flex-col h-full border-r border-slate-100 p-6">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <Activity className="text-white" size={24} />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-800">
          MediConnect
        </h2>
      </div>

      <nav className="flex-1 space-y-2">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-4 mb-2">
          Main Menu
        </p>

        {/* PATIENT LINKS */}
        {user?.role === "PATIENT" && (
          <>
            <NavLink to="/patient" end className={navItemClasses}>
              <LayoutDashboard size={20} />
              <span className="font-medium">Dashboard</span>
            </NavLink>
            <NavLink to="/patient/book" className={navItemClasses}>
              <CalendarPlus size={20} />
              <span className="font-medium">Book Appointment</span>
            </NavLink>
            <NavLink to="/patient/my-appointments" className={navItemClasses}>
              <CalendarCheck size={20} />
              <span className="font-medium">My Appointments</span>
            </NavLink>
            <NavLink to="/patient/doctors" className={navItemClasses}>
              <Stethoscope size={20} />
              <span className="font-medium">Find Doctors</span>
            </NavLink>
            <NavLink to="/patient/profile" className={navItemClasses}>
              <UserRound size={20} />
              <span className="font-medium">Profile</span>
            </NavLink>
          </>
        )}

        {/* DOCTOR LINKS */}
{user?.role === "DOCTOR" && (
  <>
    <NavLink to="/doctor" end className={navItemClasses}>
      <LayoutDashboard size={20} />
      <span className="font-medium">Doctor Dashboard</span>
    </NavLink>
    
    {/* ADDED: Link to Today's Appointments */}
    <NavLink to="/doctor/today" className={navItemClasses}>
      <CalendarCheck size={20} />
      <span className="font-medium">Live Schedule</span>
    </NavLink>

    <NavLink to="/doctor/availability" className={navItemClasses}>
      <Clock size={20} />
      <span className="font-medium">Set Availability</span>
    </NavLink>
  </>
)}
        {/* ADMIN LINKS */}
        {user?.role === "ADMIN" && (
          <>
            <NavLink to="/admin" end className={navItemClasses}>
              <LayoutDashboard size={20} />
              <span className="font-medium">Admin Panel</span>
            </NavLink>
            <NavLink to="/admin/manage-doctors" className={navItemClasses}>
              <Stethoscope size={20} />
              <span className="font-medium">Manage Doctors</span>
            </NavLink>
            <NavLink to="/admin/manage-patients" className={navItemClasses}>
              <Users size={20} />
              <span className="font-medium">Manage Patients</span>
            </NavLink>
          </>
        )}
      </nav>

      {/* Optional Footer Element */}
      <div className="mt-auto p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-2 text-slate-500">
          <ShieldCheck size={16} />
          <span className="text-xs font-semibold uppercase italic">Secure Session</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;