const Person = require('./person');

module.exports = class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    let classInfo = `I haven't been allowed to join Class.`
    if (this.klass) {
      if (this.klass.leader === this) {
        classInfo = `I am Leader of Class ${this.klass.number}.`;
      } else {
        classInfo = `I am at Class ${this.klass.number}.`
      }
    }
    return `${super.introduce()} I am a Student. ${classInfo}`
  }
}
