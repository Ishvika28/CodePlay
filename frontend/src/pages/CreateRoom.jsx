import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateRoom() {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/rooms/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ roomName }),
    });

    const data = await res.json();

    if (res.ok) {
      navigate(`/room/${data.roomCode}`);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 h-screen bg-black/40 backdrop-blur-lg border-r border-white/10 p-6">
          <h1 className="text-2xl font-bold mb-10 text-blue-500">CodePlay</h1>

          <nav className="flex flex-col gap-5 text-gray-400">
            <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
            <Link to="/create-room" className="text-blue-400">Create Room</Link>
            <Link to="/join-room" className="hover:text-blue-400">Join Room</Link>
            <Link to="/leaderboard" className="hover:text-blue-400">Leaderboard</Link>
            <Link to="/profile" className="hover:text-blue-400">Profile</Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-12">

          <h2 className="text-4xl font-bold mb-3">Create Room</h2>
          <p className="text-gray-400 mb-12">
            Start a coding contest and invite others to join.
          </p>

          <div className="max-w-xl bg-black/40 border border-white/10 rounded-2xl p-8 shadow-xl">

            <form onSubmit={handleCreateRoom} className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold"
              >
                Create Room
              </button>

            </form>

          </div>

        </main>
      </div>
    </div>
  );
}

export default CreateRoom;