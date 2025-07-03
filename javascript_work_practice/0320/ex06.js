class AA {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

class BB extends AA {
    //constructor는 안적어도 자동으로 적혀져있는 상태(생략가능한 문법)
    // constructor(...restargs) {
           //constructor를 적으면 super를 무조건 호출해야 함
    //     super(...restargs);
    // }
}

const me = new BB(10, 20);
console.log(me);