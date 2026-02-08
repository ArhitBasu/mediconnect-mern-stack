import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-64 bg-blue-900 text-white p-5 min-h-screen">
      <h2 className="text-xl font-bold mb-8">MediConnect</h2>

      {/* PATIENT */}
      {user?.role === "PATIENT" && (
        <>
          <NavLink to="/patient" className="sidebar-link">Dashboard</NavLink>
          <NavLink to="/patient/book" className="sidebar-link">Book Appointment</NavLink>
          <NavLink to="/patient/my-appointments" className="sidebar-link">My Appointments</NavLink>
          <NavLink to="/patient/doctors" className="sidebar-link">Doctors</NavLink>
          <NavLink to="/patient/profile" className="sidebar-link">Profile</NavLink>
        </>
      )}

      {/* DOCTOR */}
      {user?.role === "DOCTOR" && (
        <>
          <NavLink to="/doctor" className="sidebar-link">Dashboard</NavLink>
          <NavLink to="/doctor/availability" className="sidebar-link">Availability</NavLink>
        </>
      )}

      {/* ADMIN */}
      {user?.role === "ADMIN" && (
        <>
          <NavLink to="/admin" className="sidebar-link">Dashboard</NavLink>
          <NavLink to="/admin/manage-doctors" className="sidebar-link">Manage Doctors</NavLink>
          <NavLink to="/admin/manage-patients" className="sidebar-link">Manage Patients</NavLink>
        </>
      )}
    </div>
  );
};

export default Sidebar;
