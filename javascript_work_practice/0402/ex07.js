const url = "http://www.naver.com";

const re = /^https?:\/\//;

//주소가 url이 맞는지 확인
console.log(re.test(url));
console.log(url.match(re));