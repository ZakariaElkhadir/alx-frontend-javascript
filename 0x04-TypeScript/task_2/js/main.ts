interface DirectorsInterface {
  workFromHome(): string;
  getCoffeeBreak?(): string;
  workDirectorTasks(): string;
}
interface TeachersInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorsInterface  {
  workFromHome() {return "Working from home"; }
  getToWork() { return "Getting a coffee break"; }
  workDirectorTasks() { return "Getting to director tasks" }

}
class Teacher implements TeachersInterface {
  workFromHome() { return "Cannot work from home"; }
  getCoffeeBreak() { return "Cannot have a break"; }
  workTeacherTasks() { return "Getting to work"; }

}
function createEmployee(salary: string | number) {
  if (typeof salary === 'string') {
    salary = parseInt(salary, 10);
  }
  if (salary < 500) {
    return Teacher;
  } else {
    return Director;
  }
}
//console.log(createEmployee(700));


function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}
let testt = executeWork(new (createEmployee(1000))());
//console.log(testt);

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects) {
  if(todayClass === "Math"){
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}
console.log(teachClass("Math"));