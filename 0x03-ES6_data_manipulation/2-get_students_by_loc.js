import getListStudents from './0-get_list_students.js';

function getStudentByLocation() {
  const students = getListStudents();
  const result = students.filter((student) => student.id === 1 || student.id === 5);
  return result;
}

export default getStudentByLocation;
