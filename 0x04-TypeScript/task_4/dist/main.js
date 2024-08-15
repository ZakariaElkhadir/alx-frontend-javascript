import { Cpp, Java, React } from './Subject';
export var cpp = new Cpp();
export var java = new Java();
export var react = new React();
export var cTeacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
    experienceTeachingReact: 5
};
console.log("C++");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log("Java");
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log("React");
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map