interface Directors {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  numberOfReports: number;
}
const director1: Directors = {
  firstName: "John",
  fullTimeEmployee: true,
  lastName: "Doe",
  location: "London",
  numberOfReports: 17
};


function printTeacher(firstName: string, lastName: string) {
  const first = firstName[0].toUpperCase();
  const last = lastName;
  return `${first}. ${last}`;
}
const result = printTeacher('John', 'Doe');


class StudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working"
  }
  displayName(): string {
    return this.firstName
  }
  result(){
    console.log(this.workOnHomework() +'\n'+ this.displayName());
  }
   

}
let student = new StudentClass('John', 'Doe');
console.log(student.result());
