import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import CreateRoom from "./pages/CreateRoom"
import JoinRoom from "./pages/JoinRoom";
import Room from "./pages/Room"
import Problem from "./pages/Problem"
import Profile from "./pages/Profile"
import Leaderboard from "./pages/Leaderboard"
import SubmitCode from "./components/SubmitCode"


import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (

    <Router>

      <Routes>

        {/* default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/create-room" element={<CreateRoom />} />

        <Route path="/join-room" element={<JoinRoom />} />

        <Route path="/room/:roomCode" element={<Room />} />

        <Route path="/room/:roomCode/problem/:problemId" element={<Problem />} />

        <Route path="/submitcode" element={<SubmitCode />} />

        <Route path="/leaderboard" element={<Leaderboard />} />

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