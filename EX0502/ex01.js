const http = require("http");
require("dotenv").config(); //env 안에 있는 변수를 가지고 와서 process.env 객체 프로퍼티 추가

console.log(process.env.PWD); //원래 기본 제공 됨
console.log(process.env.password); //dotenv config() 함수 호출해야 추가됨

http
  .createServer((req, res) => {
    console.log("암호화 password");
    console.log(req.url, req.headers.cookie);
    res.end("Hello");
  })
  .listen(8003, () => {
    console.log("8003포트로 실행 되었습니다.");
  });
