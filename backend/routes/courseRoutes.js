import express from "express"
import { getRecommendedCourses } from "../controllers/courseController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.get("/recommended", protect, getRecommendedCourses)

export default router
