/*
    1.표준 빌트인객체 - 실행환경과 상관없이 사용되어지는 것
    Array, String, Bollean, Math

    2.호스트 객체
    브라우저 - document
    node - process

    3.사용자 정의 객체
    - 개발자가 직접 만드는 객체
*/

// console.log(document);
// console.log(process);

// console.log(XMLHttpRequest);
// console.log(fetch);

fetch('https://github.com/cjo3o/p2-jim/blob/main/header.html')
//가지고 왔는 소스를 string으로 변환해라
.then(response=>response.text())
//string으로 변환한 것을 data라는  변수에 넣어달라
.then(data=>{
    //data 안에 있는 소스 출력
    console.log(data);
})