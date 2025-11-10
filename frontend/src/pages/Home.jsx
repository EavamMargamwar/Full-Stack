"use client"

import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext.jsx"
import "../styles/Home.css"

export default function Home() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const handleGetRecommendations = () => {
    navigate("/recommendations")
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Course Recommendation System</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>
      <div className="home-content">
        <div className="welcome-card">
          <h2>Welcome, {user?.name}!</h2>
          <p>Discover the best courses tailored to your interests and skill level.</p>
          <button onClick={handleGetRecommendations} className="cta-btn">
            Get Course Recommendations
          </button>
        </div>
      </div>
    </div>
  )
}
