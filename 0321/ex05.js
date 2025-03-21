const base = {
    sayHi(){
        console.log("base sayhi 함수");
    }
}

const deriverd = {
    __proto__: base,
    sayHi() {
        super.sayHi();
        console.log("derived sayHi함수");
    },
    // 화살표 함수와 일반 함수에서는 super 사용x
    arrow:()=>{
        //super.sayHi();
    }
}

deriverd.sayHi();
// deriverd.arrow();