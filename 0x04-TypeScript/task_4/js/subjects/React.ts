/// <reference path="Subject.ts" />
/// <reference path="Teacher.ts" />

namespace Subjects {
  export class React extends Subject {
    getRequirements() {
      return "Here is the list of requirements for React";
    }
    getAvailableTeacher() {
      if (!this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact === 0) {
        return 'No available teacher';
      }
      else {
        return `Available Teacher ${this.teacher.firstName}`;
      }
    }

  }
}
