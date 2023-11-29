function Student(name, gender, age) {
  this.name=name;
  this.gender=gender;
  this.age=age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName=subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (marks.length==0) {
    this.marks="Студент отчислен";
  } else {
    this.marks=marks;
  }
  
}

Student.prototype.getAverage = function () {
    if(this.marks === undefined){
        return 'Нет оценок';
    } else {
        return this.marks.reduce((acc,item)=>acc+item, 0)/this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded=reason;
}
