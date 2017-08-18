// Write your code here
module.exports = class Class {
  constructor(number) {
    this.number = number;
    this.students = [];
    this.teachers = [];
  }

  appendMember(student) {
    this.students.push(student);
    this.notify('StudentAppended', `${student.name} has joined Class ${this.number}`);
  }

  assignTeacher(teacher) {
    this.teachers.push(teacher);
  }

  assignLeader(student) {
    if (this.hasStudent(student)) {
      this.leader = student;
      this.notify('LeaderAssigned', `${student.name} become Leader of Class ${this.number}`);
      return 'Assign team leader successfully.';
    }

    return 'It is not one of us.';
  }

  hasStudent(student) {
    return this.students.includes(student);
  }

  notify(event, msg) {
    this.teachers.forEach(t => t[`notify${event}`].call(this, msg));
  }
}
