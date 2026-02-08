const PatientDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Patient Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="card">Upcoming Appointments</div>
        <div className="card">Doctors Available</div>
        <div className="card">Prescription History</div>
      </div>
    </div>
  );
};

export default PatientDashboard;
