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
var result = printTeacher('John', 'Doe');
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    StudentClass.prototype.result = function () {
        console.log(this.workOnHomework() + '\n' + this.displayName());
    };
    return StudentClass;
}());
var student = new StudentClass('John', 'Doe');
console.log(student.result());
