const ManageDoctors = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Doctors</h1>

      <div className="card">
        <button className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
          Add Doctor
        </button>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th>Name</th>
              <th>Specialization</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. John</td>
              <td>Cardiologist</td>
              <td className="text-green-600">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
