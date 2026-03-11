import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Leaderboard from "./pages/Leaderboard"
import SubmitCode from "./pages/SubmitCode"


import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (

    <Router>

      <Routes>

        {/* default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/submit/:roomCode" element={<SubmitCode />} />

        <Route path="/leaderboard/:roomCode" element={<Leaderboard />} />

      </Routes>

    </Router>

  )

}

export default App