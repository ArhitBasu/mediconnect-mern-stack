const MyAppointments = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>

      <div className="card">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Doctor</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>Dr. Smith</td>
              <td>12 Feb 2026</td>
              <td className="text-green-600">Confirmed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
