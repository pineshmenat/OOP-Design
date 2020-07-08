import SchoolStaff from "./SchoolStaff";
import CourseInstructor from "./CourseInstructor";

export default class EnglishTeacher extends SchoolStaff implements CourseInstructor {
    teach() {
        console.log("Teaching English.");
    }    
}