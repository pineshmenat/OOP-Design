import SchoolStaff from "./SchoolStaff";
import CourseInstructor from "./CourseInstructor";

export default class MathTeacher extends SchoolStaff implements CourseInstructor {
    teach() {
        console.log("Teaching Math.");
    }    
}