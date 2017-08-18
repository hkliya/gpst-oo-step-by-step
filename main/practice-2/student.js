const Person = require('./person');

const Student = function(name, age, clazz) {
  Person.call(this, name, age);
  this.clazz = clazz;
}

Student.prototype = new Person();

Student.prototype.introduce = function() {
  let clazzMessage = `I am at Class ${this.clazz.number}.`;
  if (this.clazz.leader === this) {
    clazzMessage = `I am Leader of Class 2.`;
  }
  return `${Person.prototype.introduce.call(this)} I am a Student. ${clazzMessage}`
}
module.exports = Student;
