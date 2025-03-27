// const sequ = function (length = 1) {
//     return Array.from({ length }, (_, i) => i);
// }

//화살표 함수로 썻을 때
const sequ = (length = 1) => Array.from({length}, (_,i) => i);

console.log(sequ(5));
console.log(sequ());