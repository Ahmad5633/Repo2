import express from "express";
import TeacherController from "../controllers/teacher.js";

const router = express.Router();

router.get("/",TeacherController.get);
router.get("/courses",TeacherController.getCourses);
router.get("/students",TeacherController.getStudents);
router.post("/",TeacherController.create);

export default router;