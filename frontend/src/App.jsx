import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Leaderboard from "./pages/Leaderboard"
import SubmitCode from "./pages/SubmitCode"


function App() {

  return (

    <Router>

      <Routes>

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/submit/:roomCode" element={<SubmitCode />} />

        <Route path="/leaderboard/:roomCode" element={<Leaderboard />} />

      </Routes>

    </Router>

  )

}

export default App