function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((grade) => grade.studentId === student.id);
      // return object with updated grade
      return {
        ...student,
        grade: grades.length ? grades[0].grade : 'N/A',
      };
    });
} export default updateStudentGradeByCity;
