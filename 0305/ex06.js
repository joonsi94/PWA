function arg() {
    //유사 배열 객ㅊ체를 -> 배열객체로 만드는 방법
    //Array.prototype.slice.call 사용해야함

    //const arr = {}; arr 연결 Array.prototype
    //const obj = {}; obj 연결 Object.prototype
    //const c = function(){} c에 연결 Function.prototype
    //[0:10, 1:20, 2:30]
    console.log(arguments);
    const test = Array.prototype.slice.call(arguments,0,2);
    console.log(test);
}

arg(10, 20, 30, 40, 50)

