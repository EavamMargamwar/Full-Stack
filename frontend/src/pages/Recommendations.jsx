"use client"

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext.jsx"
import apiClient from "../services/api.js"
import "../styles/Recommendations.css"

export default function Recommendations() {
  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [searched, setSearched] = useState(false)
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const categories = ["Web Dev", "AI", "Data Science", "UI/UX", "Cybersecurity"]
  const difficulties = ["Beginner", "Intermediate", "Advanced"]

  const handleSearch = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    setSearched(true)

    try {
      const params = new URLSearchParams()
      if (category) params.append("category", category)
      if (difficulty) params.append("difficulty", difficulty)

      const response = await apiClient.get(`/courses/recommended?${params}`)
      setCourses(response.data.courses)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch courses")
      setCourses([])
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const handleBack = () => {
    navigate("/home")
  }

  return (
    <div className="recommendations-container">
      <header className="recommendations-header">
        <h1>Find Your Perfect Course</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>

      <div className="recommendations-content">
        <div className="filter-card">
          <form onSubmit={handleSearch}>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="difficulty">Difficulty Level:</label>
              <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="">Select difficulty</option>
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" disabled={loading} className="search-btn">
                {loading ? "Searching..." : "Search Courses"}
              </button>
              <button type="button" onClick={handleBack} className="back-btn">
                Back
              </button>
            </div>
          </form>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="courses-grid">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className="course-card">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-details">
                  <span className="badge category">{course.category}</span>
                  <span className="badge difficulty">{course.difficulty}</span>
                </div>
                <div className="course-meta">
                  <p>
                    <strong>Instructor:</strong> {course.instructor}
                  </p>
                  <p>
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p>
                    <strong>Rating:</strong> ⭐ {course.rating}/5
                  </p>
                </div>
              </div>
            ))
          ) : searched ? (
            <p className="no-courses">No courses found matching your criteria. Try different filters!</p>
          ) : (
            <p className="no-courses">Select filters and search to see course recommendations.</p>
          )}
        </div>
      </div>
    </div>
  )
}
