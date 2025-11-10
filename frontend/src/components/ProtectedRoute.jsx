"use client"

import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext.jsx"

export default function ProtectedRoute({ children }) {
  const { token, loading } = useContext(AuthContext)

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>
  }

  return token ? children : <Navigate to="/login" replace />
}
