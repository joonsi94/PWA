function Person(name,age){
    this.name = name;
    this.age = age;
}

//Person.prototype 안에는 Person constructor가 원래 있다.
// Person.prototype.greet = function (){
//     console.log(`hello 나는 ${this.name} 나이는  ${this.age}`);
// }

//constructor가 없어졌다.
Person.prototype = {
    greet(){
        console.log(`hello 나는 ${this.name} 나이는  ${this.age}`);
    }
}

//new 연산자 객체 생성을 하게 되면
//자바스크립트 엔진이 자동으로 object constructor를 추가 하게 된다.
const p1 = new Person('aaa',20);
const p2 = new Person('bbb',30);

// p1.greet();
// p2.greet();

//constructor 확인시 Object를 확인 할 수 있다.
console.log(p1.constructor);
console.log(p2.constructor);