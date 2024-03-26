

import Course from "../models/course.js";

export const getAllCourses = async () => {
    try {
        const courses = await Course.find();
        return courses;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createCourse = async (courseData) => {
    try {
        const course = await Course.create(courseData);
        return course;
    } catch (error) {
        throw new Error(error.message);
    }
};
