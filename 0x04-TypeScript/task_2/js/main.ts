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
console.log(createEmployee(700));
