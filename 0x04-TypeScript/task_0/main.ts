interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York'
};

const student2: Student = {
    firstName: "James",
    lastName: "Smith",
    age: 30,
    location: "California"
};

const studentsList: Array<Student> = [student1, student2];