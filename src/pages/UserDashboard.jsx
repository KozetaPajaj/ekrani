import React, { useState, useEffect } from "react";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  const getMemberSince = () => {
    const storedDate = localStorage.getItem("memberSince");
    if (storedDate)
      return new Date(storedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });

    const today = new Date();
    localStorage.setItem("memberSince", today.toISOString());
    return today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  if (!user) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center bg-black">
        <p className="text-xl text-red-400">
          No user data found. Please log in.
        </p>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen text-white px-6 py-10 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/cinema.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      <section className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-teal-400 mt-28 uppercase">
          Welcome back, {user.firstName} {user.lastName}!
        </h1>

        <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 border-b border-white pb-2 uppercase">
            Account Details
          </h2>
          <div className="space-y-2 text-lg">
            <p>
              <span className="text-teal-400">First Name:</span>{" "}
              {user.firstName}
            </p>
            <p>
              <span className="text-teal-400">Last Name:</span> {user.lastName}
            </p>
            <p>
              <span className="text-teal-400">Email:</span> {user.email}
            </p>
            <p>
              <span className="text-teal-400">Member Since:</span>{" "}
              {getMemberSince()}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserDashboard;
