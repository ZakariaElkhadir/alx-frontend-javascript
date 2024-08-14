var director1 = {
    firstName: "John",
    fullTimeEmployee: true,
    lastName: "Doe",
    location: "London",
    numberOfReports: 17
};
function printTeacher(firstName, lastName) {
    var first = firstName[0].toUpperCase();
    var last = lastName;
    return "".concat(first, ". ").concat(last);
}
var result = printTeacher('Brother', 'Rachid');
console.log(result);
