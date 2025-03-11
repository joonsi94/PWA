const person = {
    name: "aaa",
    age: 30,
    addr: "daegu"
}

console.log('name' in person);
console.log('age' in person);
console.log('addr' in person);

console.log('phone' in person);

//in은 프로토타입체인 안에 있는 모든 프로퍼티 대상으로
//true false 체크합니다.
console.log('toString in Object.prototype');
console.log('toString' in Object.prototype);
console.log('toString in Object');
console.log('toString' in person);

//하지만 for in 에서 나오지 않는 이유는
//16장에서 배운 데이터 프로퍼티 어트리뷰트 디스크립터로 확인해보면
//enumrable false가 되어져 있기 때문에 toString은 나오지 않습니다.
for(const key in person){
    console.log(key);
}