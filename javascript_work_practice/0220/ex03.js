var a = [1, 2, 3];
// console.log(a);
// console.log(...a);  //깊은복사

//1,2,3 출력해라
//for구문으로
//map forEach filter reduce

// for (var i = 0; i < a.length; i++)
//     console.log(a[i]);

//개발자가 쓰는 방식 유행
// a.forEach(() => {
//     console.log("화살표 함수 forEach");
// });

[1,2,3].forEach(() => {
    console.log("화살표 함수 forEach");
});

// [...a].forEach(() => {
//     console.log("화살표 함수 forEach");
// });


// a.forEach(function (){ console.log("전통적인 함수 forEach") });