import Course from "../models/course.js";
import authenticate from "../middlewares/authenticate.js";

const courseController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createCourses: async (req, res) => {
    try {
      const course = await Course.create(req.body);
      res.status(201).json(course);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};
// Apply authenticate middleware to the controllers
// courseController.getAllCourses = authenticate;
// courseController.createCourses = authenticate;
export default courseController;
