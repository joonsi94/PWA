function Circle(){
    this.radius = 5
    this.getDiameter = 0
    // function (){return 2* this.radius}
}

Circle.prototype.getDiameter = function (){return 2* this.radius}

const newCircle = new Circle();
console.log(newCircle.getDiameter());