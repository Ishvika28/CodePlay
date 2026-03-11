import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })

      const data = await response.json()

      if (response.ok) {

        alert("Account created successfully")

        navigate("/login")

      } else {

        alert(data.message)

      }

    } catch (error) {

      console.error(error)
      alert("Something went wrong")

    }

  }

  const passwordStrength = () => {

    if (password.length > 10) return "Strong"
    if (password.length > 6) return "Medium"
    if (password.length > 0) return "Weak"
    return ""

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">

      <div className="w-[420px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-2">
          CodePlay
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Create your account
        </p>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-blue-500 transition"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-blue-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-blue-500 transition"
          />

          {password && (
            <p className="text-sm text-gray-400">
              Strength: {passwordStrength()}
            </p>
          )}

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-blue-500 transition"
          />

          <button
            className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>

      </div>

    </div>

  )

}

export default Signup