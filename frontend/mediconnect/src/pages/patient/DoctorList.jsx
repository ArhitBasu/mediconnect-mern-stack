const DoctorList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Available Doctors</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="card">
          <h2 className="font-semibold">Dr. John</h2>
          <p>Cardiologist</p>
          <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
