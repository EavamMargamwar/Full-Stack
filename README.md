# Course Recommendation System

A full-stack web application for recommending courses to students based on their interests and skill levels.

## Project Structure

\`\`\`
fullstack-auth-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── vite.config.js
\`\`\`

## Features

### Authentication
- User signup with email and password
- User login with JWT authentication
- Password hashing with bcryptjs
- Protected routes requiring authentication

### Course Recommendations
- Filter courses by category (Web Dev, AI, Data Science, UI/UX, Cybersecurity)
- Filter courses by difficulty level (Beginner, Intermediate, Advanced)
- Display recommended courses with details (title, description, instructor, duration, rating)
- Courses sorted by rating

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JWT for authentication
- bcryptjs for password hashing

### Frontend
- React 18
- React Router DOM
- Vite
- Axios
- Context API for state management

## Installation & Setup

### Backend Setup

1. Navigate to backend folder:
   \`\`\`bash
   cd backend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create `.env` file with:
   \`\`\`
   MONGO_URI=mongodb://localhost:27017/course-recommendation
   JWT_SECRET=your_jwt_secret_key_here_change_in_production
   PORT=5000
   \`\`\`

4. Make sure MongoDB is running, then start the server:
   \`\`\`bash
   npm start
   \`\`\`

### Frontend Setup

1. Navigate to frontend folder:
   \`\`\`bash
   cd frontend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a new user
- `POST /api/auth/login` - Login user and receive JWT token

### Courses
- `GET /api/courses/recommended?category=Web%20Dev&difficulty=Beginner` - Get recommended courses (protected)

## How to Use

1. Sign up with your email and password
2. Login with your credentials
3. Navigate to "Get Course Recommendations"
4. Select a category and/or difficulty level
5. Click "Search Courses" to see recommendations
6. View course details including title, description, instructor, duration, and rating

## Seeding Sample Data

To seed sample courses into the database, you can use MongoDB directly or create a seed script. Sample courses are available for:
- Web Dev
- AI
- Data Science
- UI/UX
- Cybersecurity

## Future Enhancements

- Add more course filters (price, language, certification)
- Implement course ratings and reviews
- Add user preferences for personalized recommendations
- Email verification for signup
- Social login (Google, GitHub)
- Payment integration for premium courses
- Course enrollment and progress tracking
# Full-Stack
