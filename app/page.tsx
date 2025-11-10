export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <header style={{ textAlign: "center", color: "white", marginBottom: "60px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", margin: "0 0 20px 0" }}>Course Recommendation System</h1>
          <p style={{ fontSize: "20px", opacity: 0.9, margin: 0 }}>
            A Full Stack Application with JWT Authentication & MongoDB
          </p>
        </header>

        {/* Main Content */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            marginBottom: "30px",
          }}
        >
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#667eea", fontSize: "28px", marginBottom: "20px" }}>📋 Project Overview</h2>
            <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.8" }}>
              This is a complete full-stack application featuring a course recommendation engine with user
              authentication, course filtering, and a modern UI. The backend runs on Node.js + Express + MongoDB, while
              the frontend is built with React + Vite.
            </p>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#667eea", fontSize: "28px", marginBottom: "20px" }}>🏗️ Project Structure</h2>
            <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px", overflowX: "auto" }}>
              <pre style={{ color: "#333", fontSize: "13px", margin: 0, fontFamily: "monospace" }}>{`fullstack-auth-app/
├── backend/
│   ├── config/db.js              (MongoDB connection)
│   ├── models/
│   │   ├── User.js               (User schema with bcrypt)
│   │   └── Course.js             (Course schema)
│   ├── controllers/
│   │   ├── authController.js     (Signup/Login logic)
│   │   └── courseController.js   (Course recommendations)
│   ├── routes/
│   │   ├── authRoutes.js         (Auth endpoints)
│   │   └── courseRoutes.js       (Course endpoints)
│   ├── middleware/
│   │   └── authMiddleware.js     (JWT protection)
│   ├── utils/generateToken.js    (JWT generation)
│   ├── server.js                 (Express server)
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── context/AuthContext.jsx      (Auth state)
    │   ├── components/
    │   │   └── ProtectedRoute.jsx       (Route protection)
    │   ├── pages/
    │   │   ├── Signup.jsx
    │   │   ├── Login.jsx
    │   │   ├── Home.jsx
    │   │   └── Recommendations.jsx
    │   ├── services/api.js              (Axios instance)
    │   ├── styles/                      (CSS files)
    │   └── App.jsx
    ├── vite.config.js
    └── package.json`}</pre>
            </div>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#667eea", fontSize: "28px", marginBottom: "20px" }}>⚙️ Features</h2>
            <ul style={{ color: "#555", fontSize: "16px", lineHeight: "2" }}>
              <li>✅ JWT-based authentication with secure token generation</li>
              <li>✅ Bcryptjs password hashing</li>
              <li>✅ MongoDB with Mongoose ORM</li>
              <li>✅ Protected routes and middleware</li>
              <li>✅ Course filtering by category & difficulty</li>
              <li>✅ React Context API for state management</li>
              <li>✅ Axios interceptors for API requests</li>
              <li>✅ Responsive UI with gradient styling</li>
            </ul>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#667eea", fontSize: "28px", marginBottom: "20px" }}>🚀 Getting Started</h2>

            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ color: "#333", fontSize: "20px", marginBottom: "15px" }}>Backend Setup</h3>
              <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
                <pre style={{ color: "#333", fontSize: "13px", margin: 0, fontFamily: "monospace" }}>{`1. cd backend
2. npm install
3. Create .env file with:
   MONGO_URI=mongodb://localhost:27017/course-recommendation
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
4. npm start`}</pre>
              </div>
            </div>

            <div>
              <h3 style={{ color: "#333", fontSize: "20px", marginBottom: "15px" }}>Frontend Setup</h3>
              <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
                <pre style={{ color: "#333", fontSize: "13px", margin: 0, fontFamily: "monospace" }}>{`1. cd frontend
2. npm install
3. npm run dev
4. Open http://localhost:3000`}</pre>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#667eea", fontSize: "28px", marginBottom: "20px" }}>📚 Categories Available</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
              {["Web Dev", "AI", "Data Science", "UI/UX", "Cybersecurity"].map((cat) => (
                <div
                  key={cat}
                  style={{
                    background: "#e8f0fe",
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "center",
                    color: "#667eea",
                    fontWeight: "bold",
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ color: "#667eea", fontSize: "28px", marginBottom: "20px" }}>🔌 Tech Stack</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              <div>
                <h3 style={{ color: "#333", marginBottom: "10px" }}>Backend</h3>
                <ul style={{ color: "#666", fontSize: "14px", margin: 0, paddingLeft: "20px" }}>
                  <li>Node.js + Express</li>
                  <li>MongoDB + Mongoose</li>
                  <li>JWT Authentication</li>
                  <li>Bcryptjs</li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: "#333", marginBottom: "10px" }}>Frontend</h3>
                <ul style={{ color: "#666", fontSize: "14px", margin: 0, paddingLeft: "20px" }}>
                  <li>React 18</li>
                  <li>Vite</li>
                  <li>React Router</li>
                  <li>Axios</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* API Endpoints */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h2 style={{ color: "#667eea", fontSize: "28px", marginBottom: "20px" }}>🔗 API Endpoints</h2>
          <div style={{ display: "grid", gap: "15px" }}>
            <div style={{ borderLeft: "4px solid #667eea", paddingLeft: "15px" }}>
              <strong style={{ color: "#333" }}>POST /api/auth/signup</strong>
              <p style={{ color: "#666", margin: "5px 0 0 0", fontSize: "14px" }}>Create a new user account</p>
            </div>
            <div style={{ borderLeft: "4px solid #667eea", paddingLeft: "15px" }}>
              <strong style={{ color: "#333" }}>POST /api/auth/login</strong>
              <p style={{ color: "#666", margin: "5px 0 0 0", fontSize: "14px" }}>Login and receive JWT token</p>
            </div>
            <div style={{ borderLeft: "4px solid #667eea", paddingLeft: "15px" }}>
              <strong style={{ color: "#333" }}>GET /api/courses/recommended</strong>
              <p style={{ color: "#666", margin: "5px 0 0 0", fontSize: "14px" }}>
                Get recommended courses (requires authentication)
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: "center", color: "white", marginTop: "60px", opacity: 0.8, fontSize: "14px" }}>
          <p>Full Stack Course Recommendation System • Built with Node.js, Express, MongoDB & React</p>
        </footer>
      </div>
    </div>
  )
}
