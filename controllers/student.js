import Student from "../models/student.js";

const StudentController = {
    get: async (req,res) => {
        try {
            const students = await Student.aggregate([
                {
                    $lookup: {
                        from: "courses",
                        localField: "courses",
                        foreignField: "_id",
                        pipeline: [
                            {
                                $lookup: {
                                    from: "teachers",
                                    localField: "teacher",
                                    foreignField: "_id",
                                    as: "teacher",
                                },
                            },
                        ],
                        as: "courses",
                    },
                },
            ]);
            res.status(200).json(students);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    create: async(req,res) =>{
        try{
            const result = await Student.create(req.body);
            res.status(200).json(result);
        } catch(err){
            res.json({message:err.message});
        }
    },
};
export default StudentController ;