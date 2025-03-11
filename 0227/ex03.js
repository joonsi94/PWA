function aa(){
    // console.log(this);
    console.log(new.target);
}

//일반함수 호출일 때는 전역객체 출력된다.window global
aa();
console.log('------------------------------------------');
// console.log(this);
new aa();