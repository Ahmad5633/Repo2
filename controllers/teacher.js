import Teacher from "../models/teacher.js";
const TeacherController = {
    get: async (req,res) => {
        try {
            const teachers = await Teacher.find();
            res.status(200).json(teachers);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getCourses: async(req,res) => {
        try {
            const teachers = await Teacher.aggregate([
                {
                    $lookup: {
                        from: "courses",
                        localField: "_id",
                        foreignField: "teacher",
                        as: "courses",
                    },
                },
            ]);
            res.status(200).json(teachers);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getStudents: async(req,res)=> {
        try {
            const teachers = await Teacher.aggregate([
                {
                    $lookup: {
                        from: "courses",
                        localField: "_id",
                        foreignField: "teacher",
                        as: "courses",
                    },
                },
                {
                    $unwind: "$courses",
                },
                {
                    $lookup: {
                        from: "students",
                        localField: "courses._id",
                        foreignField: "courses",
                        as: "students",
                    },
                },
            ]);
            res.status(200).json(teachers);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    create: async(req,res) =>{
        try {
            const teacher = await TeacherServices.create(req.body);
            res.status(201).json(teacher);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
};
export default TeacherController;


