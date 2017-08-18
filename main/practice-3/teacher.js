const Person = require('./person');

module.exports = class Teacher extends Person {
  constructor(name, age, classes) {
    super(name, age);
    this.classes = classes;
    classes.forEach(c => c.assignTeacher(this));
  }

  introduce() {
    let teachClassInfo = 'No Class';
    if (this.classes.length > 0) {
      teachClassInfo = `Class ${this.classes.map(c => c.number).join(',')}`
    }
    return `${super.introduce()} I am a Teacher. I teach ${teachClassInfo}.`;
  }

  isTeaching(student) {
    return this.classes.some(c => c.hasStudent(student))
  }

  notifyStudentAppended(msg) {
    return `I am Tom. I know ${msg}.`
  }

  notifyLeaderAssigned(msg) {
    return `I am Tom. I know ${msg}.`
  }
}
