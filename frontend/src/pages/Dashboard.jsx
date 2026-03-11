import { Link, useNavigate } from "react-router-dom"

function Dashboard() {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative">

      <div className="gradient-mesh"></div>

      <div className="flex relative z-10">

        {/* Sidebar */}

        <aside className="w-64 h-screen bg-black/40 backdrop-blur-lg border-r border-white/10 p-6">

          <h1 className="text-2xl font-bold mb-10 text-blue-500">
            CodePlay
          </h1>

          <nav className="flex flex-col gap-5 text-gray-400">

            <Link
              to="/dashboard"
              className="hover:text-blue-400 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/create-room"
              className="hover:text-blue-400 transition"
            >
              Create Room
            </Link>

            <Link
              to="/join-room"
              className="hover:text-blue-400 transition"
            >
              Join Room
            </Link>

            <Link
              to="/leaderboard"
              className="hover:text-blue-400 transition"
            >
              Leaderboard
            </Link>

            <Link
              to="/profile"
              className="hover:text-blue-400 transition"
            >
              Profile
            </Link>

            <button
              onClick={logout}
              className="text-left hover:text-red-400 transition"
            >
              Logout
            </button>

          </nav>

        </aside>


        {/* Main content */}

        <main className="flex-1 p-12">

          <h2 className="text-4xl font-bold mb-3">
            Welcome to CodePlay 
          </h2>

          <p className="text-gray-400 mb-12">
            Practice coding, challenge friends, and climb the leaderboard.
          </p>


          <div className="grid grid-cols-3 gap-8">

            <div className="bg-black/40 border border-white/10 rounded-2xl p-8 hover:border-blue-500 hover:scale-[1.02] transition shadow-xl">

              <h3 className="text-xl font-semibold mb-2">
                Create Room
              </h3>

              <p className="text-gray-400 mb-6">
                Start a coding battle with friends.
              </p>

              <Link
                to="/create-room"
                className="text-blue-400 hover:text-blue-300"
              >
                Start →
              </Link>

            </div>


            <div className="bg-black/40 border border-white/10 rounded-2xl p-8 hover:border-blue-500 hover:scale-[1.02] transition shadow-xl">

              <h3 className="text-xl font-semibold mb-2">
                Join Room
              </h3>

              <p className="text-gray-400 mb-6">
                Enter a room code to compete.
              </p>

              <Link
                to="/join-room"
                className="text-blue-400 hover:text-blue-300"
              >
                Join →
              </Link>

            </div>


            <div className="bg-black/40 border border-white/10 rounded-2xl p-8 hover:border-blue-500 hover:scale-[1.02] transition shadow-xl">

              <h3 className="text-xl font-semibold mb-2">
                Leaderboard
              </h3>

              <p className="text-gray-400 mb-6">
                See top coders on CodePlay.
              </p>

              <Link
                to="/leaderboard"
                className="text-blue-400 hover:text-blue-300"
              >
                View →
              </Link>

            </div>

          </div>

        </main>

      </div>

    </div>

  )

}

export default Dashboard