function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const gradesFiltered = newGrades.filter((grade) => grade.studentId === student.id);
      const updatedStudent = {
        grade: gradesFiltered.length ? gradesFiltered[0].grade : 'N/A',
      };
      return updatedStudent;
    });
} export default updateStudentGradeByCity;
