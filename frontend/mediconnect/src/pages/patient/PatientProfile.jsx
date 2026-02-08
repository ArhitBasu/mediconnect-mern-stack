const PatientProfile = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="card max-w-xl space-y-3">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@email.com</p>
        <p><strong>Phone:</strong> +91 9999999999</p>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default PatientProfile;
