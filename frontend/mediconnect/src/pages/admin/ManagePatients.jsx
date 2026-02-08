const ManagePatients = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Patients</h1>

      <div className="card">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@email.com</td>
              <td className="text-green-600">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePatients;
