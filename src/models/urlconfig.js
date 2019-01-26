const baseURL = 'http://localhost:5001';

const addTeacherURL = baseURL + '/admin/addTeacher';
const teacherListURL = baseURL + '/admin/teachers';

const addStudentURL = baseURL + '/admin/addStudent';
const studentListURL = baseURL + '/admin/students';

const courseListURL = baseURL + '/admin/courses';
const commentListURL = baseURL + '/admin/comments';


export{
    addTeacherURL,
    teacherListURL,
    addStudentURL,
    studentListURL,
    courseListURL,
    commentListURL,
}