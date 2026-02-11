import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Layout from "./components/layout/Layout";

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
// --- ADDED THESE IMPORTS ---
import TodayAppointments from "./pages/doctor/TodayAppointments";
import WritePrescription from "./pages/doctor/WritePrescription";

// Patient
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import MyAppointments from "./pages/patient/MyAppoinments";
import DoctorList from "./pages/patient/DoctorList";
import PatientProfile from "./pages/patient/PatientProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Default */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ================= ADMIN ================= */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="ADMIN">
                <Layout>
                  <AdminDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/manage-doctors"
            element={
              <ProtectedRoute role="ADMIN">
                <Layout>
                  <ManageDoctors />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/manage-patients"
            element={
              <ProtectedRoute role="ADMIN">
                <Layout>
                  <ManagePatients />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* ================= DOCTOR ================= */}
          <Route
            path="/doctor"
            element={
              <ProtectedRoute role="DOCTOR">
                <Layout>
                  <DoctorDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor/availability"
            element={
              <ProtectedRoute role="DOCTOR">
                <Layout>
                  <Availability />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* --- ADDED DOCTOR ROUTES --- */}
          <Route
            path="/doctor/today"
            element={
              <ProtectedRoute role="DOCTOR">
                <Layout>
                  <TodayAppointments />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor/write-prescription"
            element={
              <ProtectedRoute role="DOCTOR">
                <Layout>
                  <WritePrescription />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* ================= PATIENT ================= */}
          <Route
            path="/patient"
            element={
              <ProtectedRoute role="PATIENT">
                <Layout>
                  <PatientDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patient/book"
            element={
              <ProtectedRoute role="PATIENT">
                <Layout>
                  <BookAppointment />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patient/my-appointments"
            element={
              <ProtectedRoute role="PATIENT">
                <Layout>
                  <MyAppointments />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patient/doctors"
            element={
              <ProtectedRoute role="PATIENT">
                <Layout>
                  <DoctorList />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/patient/profile"
            element={
              <ProtectedRoute role="PATIENT">
                <Layout>
                  <PatientProfile />
                </Layout>
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;