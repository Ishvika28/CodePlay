import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Profile() {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const fetchProfile = async () => {

    try {

      const token = localStorage.getItem("token")

      const response = await fetch("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await response.json()

      setUser(data)

    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  if (!user) {
    return <p className="text-white p-10">Loading...</p>
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

            <Link to="/dashboard" className="hover:text-blue-400 transition">
              Dashboard
            </Link>

            <Link to="/create-room" className="hover:text-blue-400 transition">
              Create Room
            </Link>

            <Link to="/join-room" className="hover:text-blue-400 transition">
              Join Room
            </Link>

            <Link to="/leaderboard" className="hover:text-blue-400 transition">
              Leaderboard
            </Link>

            <Link to="/profile" className="text-blue-400">
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


        {/* Profile Content */}

        <main className="flex-1 p-12">

  <h2 className="text-4xl font-bold mb-10">
    Your Profile
  </h2>

  {/* Top profile section */}

  <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-xl flex items-center gap-8 mb-10 max-w-4xl">

    <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">
      {user.name[0]}
    </div>

    <div>
      <h3 className="text-2xl font-semibold">
        {user.name}
      </h3>

      <p className="text-gray-400">
        {user.email}
      </p>

      <p className="text-blue-400 mt-2">
        CodePlay Developer
      </p>
    </div>

  </div>


  {/* Stats Grid */}

  <div className="grid grid-cols-3 gap-6 max-w-4xl">

    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
      <p className="text-gray-400 text-sm">Rating</p>
      <h3 className="text-2xl font-bold text-blue-400">
        {user.rating}
      </h3>
    </div>

    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
      <p className="text-gray-400 text-sm">Rooms Played</p>
      <h3 className="text-2xl font-bold text-green-400">
        0
      </h3>
    </div>

    <div className="bg-black/40 border border-white/10 rounded-xl p-6">
      <p className="text-gray-400 text-sm">Problems Solved</p>
      <h3 className="text-2xl font-bold text-purple-400">
        0
      </h3>
    </div>

  </div>


  {/* Activity Section */}

  <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-xl mt-10 max-w-4xl">

    <h3 className="text-xl font-semibold mb-4">
      Recent Activity
    </h3>

    <p className="text-gray-400">
      No activity yet. Join a room and start competing!
    </p>

  </div>

</main>

      </div>

    </div>

  )

}

export default Profile