class Human{
    constructor(type='human'){
        this.type = type;
        return this;    //생략 되어진 표현
    }
    //정적 메서드인 isHuman은 객체 생성하지 않고 사용
    static isHuman(human){
        console.log('인간이다'+human);
    }
    //내부 메서드 prototype
    //객체 성성하면 prototype 체인룰에서 생성
    //개체 생성해서 사용
    breathe(){
        alert('ddddd');
    }
}

class A extends Human{
    //static isHuman(){}
}

// const math = new Math();
// math.random();
// Math.random()

const human = new Human();
// const human = {
//     type:'humna',
// }
console.dir(human);
Human.isHuman(human);
AA.isHuman(human);
// console.log(human.type);