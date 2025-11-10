import mongoose from "mongoose"

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a course title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a course description"],
    },
    category: {
      type: String,
      enum: ["Web Dev", "AI", "Data Science", "UI/UX", "Cybersecurity"],
      required: [true, "Please provide a category"],
    },
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: [true, "Please provide difficulty level"],
    },
    instructor: {
      type: String,
      default: "Unknown",
    },
    duration: {
      type: String,
      default: "4 weeks",
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true },
)

export default mongoose.model("Course", courseSchema)
