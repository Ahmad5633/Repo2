import express from "express";
import StudentController from "../controllers/student.js";

const router = express.Router();

router.get("/",StudentController.get);
router.post("/",StudentController.create);
export default router;