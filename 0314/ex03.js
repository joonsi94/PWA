/*
    1.전역에서의 this
    2.일반함수에서 this
      일반모드
      스트릭트모드 => package.json type:module 자동으로 strict모드이다.
    3.메서드에서의 this
    4.생성자에서의 this


*/
//전역에서의 this
// console.log(this)
// function aa(){
//     console.log(this);
//     console.log(this.crypto.randomUUID());
// }

// aa();

// const obj = {
//     a:10,
//     doa(){
//         console.log(this);
//         console.log(`a${this.a}`);
//     }
// }

// obj.doa();

// function aaa(){
//     console.log(this);
//     this.name = "마이네임";
// }

// const a1 = new aaa();
// console.log(a1);

class AA{
    constructor(){
        console.log(this);
        this.name = "마이클래스네임";
    }
}

const a2 = new AA();
console.log(a2);