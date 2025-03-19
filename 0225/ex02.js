//데이터 프로퍼티 어튜리뷰트

const obj = { name: 'Alice' };

const desc = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(desc);

Object.defineProperty(obj, 'age', {
    value: 20,
    writable: true,
    enumerable: true,   //false일 경우 age는 출력이 안 됨
    configurable: false
})

delete obj.name; //configurable이 true라서 삭제가능이기 때문에 삭제
delete obj.age;  //configurable이 false라서 삭제불가능이기 때문에 출력

console.log(obj.name);
console.log(obj.age);

console.log('----------------------')
for (const key in obj) {
    console.log(key);
}
