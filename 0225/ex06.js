const circle1 = {
    radius: 5,
    getDiamter(){
        return 2 *this.radius;
    }
}

const circle2 = {
    radius: 10,
    getDiamter(){
        return 2 *this.radius;
    }
}

console.log(circle1.getDiamter());
console.log(circle2.getDiamter());