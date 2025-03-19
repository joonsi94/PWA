//함수 만드는 방법 2가지(많지만 이거만 기억)
//객체 리터럴{}
//new 생성자 함수

const obj = new Object();

obj.name = "홍길동";
obj.sayHello = function(){
    console.log(`Hi my name ${this.name}`);
}

console.log(obj.name);
obj.sayHello();