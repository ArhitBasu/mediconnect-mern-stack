import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Layout from "./components/layout/Layout";

// Public Pages
import Home from "./pages/Home"; // Your new landing page
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManagePatients from "./pages/admin/ManagePatients";

// Doctor
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import Availability from "./pages/doctor/Availability";
import TodayAppointments from "./pages/doctor/TodayAppointments";
import WritePrescription from "./pages/doctor/WritePrescription";

// Patient
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import MyAppointments from "./pages/patient/MyAppointments";
import DoctorList from "./pages/patient/DoctorList";
import PatientProfile from "./pages/patient/PatientProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ================= ADMIN ROUTES ================= */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Layout><AdminDashboard /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/admin/manage-doctors" element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Layout><ManageDoctors /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/admin/manage-patients" element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Layout><ManagePatients /></Layout>
            </ProtectedRoute>
          } />

          {/* ================= DOCTOR ROUTES ================= */}
          <Route path="/doctor" element={
            <ProtectedRoute allowedRoles={["DOCTOR"]}>
              <Layout><DoctorDashboard /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/doctor/availability" element={
            <ProtectedRoute allowedRoles={["DOCTOR"]}>
              <Layout><Availability /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/doctor/today" element={
            <ProtectedRoute allowedRoles={["DOCTOR"]}>
              <Layout><TodayAppointments /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/doctor/write-prescription" element={
            <ProtectedRoute allowedRoles={["DOCTOR"]}>
              <Layout><WritePrescription /></Layout>
            </ProtectedRoute>
          } />

          {/* ================= PATIENT ROUTES ================= */}
          <Route path="/patient" element={
            <ProtectedRoute allowedRoles={["PATIENT"]}>
              <Layout><PatientDashboard /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/patient/book" element={
            <ProtectedRoute allowedRoles={["PATIENT"]}>
              <Layout><BookAppointment /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/patient/my-appointments" element={
            <ProtectedRoute allowedRoles={["PATIENT"]}>
              <Layout><MyAppointments /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/patient/doctors" element={
            <ProtectedRoute allowedRoles={["PATIENT"]}>
              <Layout><DoctorList /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/patient/profile" element={
            <ProtectedRoute allowedRoles={["PATIENT"]}>
              <Layout><PatientProfile /></Layout>
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;