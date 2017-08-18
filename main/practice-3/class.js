// Write your code here
module.exports = class Class {
  constructor(number) {
    this.number = number;
    this.students = [];
  }

  appendMember(student) {
    this.students.push(student);
    if (this.teacher) {
      this.teacher.notifyStudentAppended(`${student.name} has joined Class ${this.number}`);
    }
  }

  assignTeacher(teacher) {
    this.teacher = teacher;
  }

  assignLeader(student) {
    if (this.hasStudent(student)) {
      this.leader = student;
      if (this.teacher) {
        this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`);
      }
      return 'Assign team leader successfully.';
    }

    return 'It is not one of us.';
  }

  hasStudent(student) {
    return this.students.includes(student);
  }
}
