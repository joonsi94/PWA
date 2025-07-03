//함수 호이스팅 변수 호이스팅이 이뤄지고
//렉시컬 환경참조해서 실행 컨텍스트를 만들고
//실행된다.

var x = 5;

function foo(){
    var x = 10;
    console.log(`foo의 상위스코프 x = ${x}`);

    test();
}

function test(){
    console.log(`상위스코프 x = ${x}`);
}

foo();