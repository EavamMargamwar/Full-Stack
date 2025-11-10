import Course from "../models/Course.js"

export const getRecommendedCourses = async (req, res) => {
  try {
    const { category, difficulty } = req.query

    const filter = {}

    if (category) {
      filter.category = category
    }

    if (difficulty) {
      filter.difficulty = difficulty
    }

    const courses = await Course.find(filter).sort({ rating: -1 })

    if (courses.length === 0) {
      return res.status(200).json({
        message: "No courses found matching your criteria",
        courses: [],
      })
    }

    res.status(200).json({
      message: "Recommended courses",
      courses,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
