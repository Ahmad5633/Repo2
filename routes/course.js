// routes/courseRoutes.js

import express from "express";
import courseController from "../controllers/course.js";

const router = express.Router();

router.get("/", courseController.getAllCourses);
router.post("/", courseController.createCourses);

export default router;
