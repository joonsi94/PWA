function aa(){
    console.log(this);
}

// 생성자 함수로 호출 시 this는 {} 빈객체를 가리킨다
new aa();
// 일반 함수로 호출 시 this는 globalThis를 가리킨다
// 브라우저이면 window. node이면 global.
aa();