//객체랑 비슷하지만
//프로퍼티로 함수를 넣을 수 있다.
const map = new Map();
map.set(()=>{},10);
map.set('aa',10);
console.log(map);

//배열이랑 비슷하지만
//중복허용하지 않는다
const set = new Set([1,2,3,4,5,6,7]);
console.log(set);