function foo(){
    console.log("전역공간 foo함수")
}

function bar(){
    var x = 10;
    function foo(){
        console.log("bar 함수 안에 foo 함수");
    }
    foo();
}

bar();