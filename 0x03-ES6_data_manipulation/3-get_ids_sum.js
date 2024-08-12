const getStudentIdsSum = (students) => {
    //accumulator starts at 0 like a temp variable
    const result = students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
    return result;
}
export default getStudentIdsSum;