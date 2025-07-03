//super 키워드는 일반 함수 function AA{} <- 이곳에서는 없는 문법
//super, extends 키워드는 오직 class에서 사용가능함.

class A{
    constructor(aa, bb) {
        this.aa = aa;
        this.bb = bb;
    }
}

class B extends A{
    constructor(aa, bb, cc) {
        super(aa, bb);  // super()는 상위객체 A의 constructor()를 호출합니다.
        this.cc = cc;
    }
    doA(){
        console.log("B클래스 안에 있는 doA 메서드");
    }
}

const me = new B(10, 20, 30);
console.log(me);
me.doA();