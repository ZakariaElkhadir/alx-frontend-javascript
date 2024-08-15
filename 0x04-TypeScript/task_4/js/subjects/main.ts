
/// <reference path="Cpp.ts" /> 
/// <reference path="Java.ts" /> 
/// <reference path="React.ts" /> 


export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
    experienceTeachingReact: 5
};

console.log("C++");
cpp.teacher = cTeacher;
console.log(cpp.getRequirements()); // Output: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Output: Available Teacher: John

// For Java subject
console.log("Java");
java.teacher = cTeacher;
console.log(java.getRequirements()); // Output: Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Output: Available Teacher: John

// For React subject
console.log("React");
react.teacher = cTeacher;
console.log(react.getRequirements()); // Output: Here is the list of requirements for React
console.log(react.getAvailableTeacher());