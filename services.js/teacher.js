import teacher from "../models/teacher.js";

const TeacherServices = {
    get: async(query)=>{
        return student.find(query);
    },
    getCourses: async () => {
        return teacher.aggredate();
    },
    getStudents: async () => {
        return teacher.aggredate();
    },
    create: async (data) =>{
        return student.create(data);
    },
};
export default TeacherServices;