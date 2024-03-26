import student from "../models/student.js";

const StudentServices = {
    get: async(query)=>{
        return student.find(query);
    },
    create: async (data) =>{
        return student.create(data);
    },
};
export default StudentServices;