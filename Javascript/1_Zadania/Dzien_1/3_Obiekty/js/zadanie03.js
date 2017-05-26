var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true){ // dodać THIS.
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + " is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  this.name = newname; // dodać THIS.
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + "was fixed");
};
console.log(Robot);

var robot1 = new Robot('Chappie');
// console.log(robot1);
robot1.sayHi("Human");

robot1.changeName("RoboCop");
console.log(robot1.name); // nie zmienił imienia, bez dodania THIS. w 17 wierszu.

robot1.fixIt();

robot1.isFunctional = false; // psujemy
robot1.sayHi('Human');
robot1.fixIt(); // naprawiamy
