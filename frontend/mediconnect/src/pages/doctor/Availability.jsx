const Availability = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Availability</h1>

      <div className="card max-w-md space-y-4">
        <input type="date" className="w-full border p-2 rounded" />
        <input type="time" className="w-full border p-2 rounded" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Slot
        </button>
      </div>
    </div>
  );
};

export default Availability;
