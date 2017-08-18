const Person = require('./person');

const Student = function(name, age, klass) {
  Person.call(this, name, age);
  this.klass = klass;
}

Student.prototype = new Person();

Student.prototype.introduce = function() {
  let classMessage = `I am at Class ${this.klass.number}.`;
  if (this.klass.leader === this) {
    classMessage = `I am Leader of Class 2.`;
  }
  return `${Person.prototype.introduce.call(this)} I am a Student. ${classMessage}`
}
module.exports = Student;
