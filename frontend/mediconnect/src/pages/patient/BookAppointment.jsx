import { useState } from "react";

const BookAppointment = () => {
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked (Demo)");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Book Appointment</h1>

      <form onSubmit={handleSubmit} className="card space-y-4 max-w-xl">
        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="reason"
          placeholder="Reason"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
