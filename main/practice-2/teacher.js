const Person = require('./person');

const Teacher = function(name, age, classes) {
  Person.call(this, name, age);
  this.classes = classes;
}

Teacher.prototype = new Person();

Teacher.prototype.introduce = function() {
  let classIds = this.classes.map(c => c.number).join(',');
  let classMessage = `I teach Class ${classIds}`;
  if (this.classes.length === 0) {
    classMessage = 'I teach No Class'
  }
  return `${Person.prototype.introduce.call(this)} I am a Teacher. ${classMessage}.`
}

module.exports = Teacher;
