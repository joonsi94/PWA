// const circle = {
//     redius : 5,
//     getDiameter(){
//         function(){return 2 * circle.redius}
//     }
// }

// const newcircle = new circle();

const circle = {
    redius: 5,
    getDiameter(){
        return 2 * circle.radius;
    }
}

console.log(circle.getDiameter())