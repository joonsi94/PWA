//함수 선언하게 되면

function test(){
    console.log('test 함수 호출')
    // const value = arguments.slice(0,2);
    // console.log(value);
}

test (10,20,30);

//Function.prototype.call(test)
test.call();;
test.apply();;
// test.bind();;