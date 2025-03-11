//Object.create(null);
//Object.create(bar.prototype); === new bar();


const obj = {
    //constructor 생성자 호출시 prototype (개발자수정가능) 가지고 생성
    bar : function(){},   //생성자 함수 사용 가능 [[construct]] [[call]] 있음

    foo(){},        //[[call]] 있음.
    arrow : ()=>{}, //[[call]] 있음.
    test : {},      //[[construct]] [[call]] 없음.
}

console.log(obj.foo.hasOwnProperty('prtotype'));
console.log(obj.arrow.hasOwnProperty('prtotype'));
console.log(obj.bar.hasOwnProperty('prtotype'));

new obj.bar(); //이것만 사용가능

// new obj.foo();
// new obj.arrow();
// new obj.test();