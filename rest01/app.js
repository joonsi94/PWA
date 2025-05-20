// 설치되어진 라이브러리를 가져올 때는
// ./express

const aa = require('./test')
console.log(aa);

const express = require('express');
const path = require('path');

const app = express();

const obj = {}

app.set('port', process.env.PORT || 3000);
// app.set('test','100');

app.use((req,res,next)=>{
    console.log('여기에 들렸다 감');
    next();
})

// RESTFUL -> RESTFUL API
// CRUD -> GET 조회 POST 삽입 PATCH,PUT 수정 DELETE 삭제

// app.get('/img',(req,res)=>{
//     console.log(__dirname); //현재 경로 출력
//     // 현재 경로에서 thml 폴더 밑에 index.html 보내기
//     res.sendFile(path.join(__dirname, './img/index.html'));
// })

app.get('/html',(req,res)=>{
    console.log(__dirname); //현재 경로 출력
    // 현재 경로에서 thml 폴더 밑에 index.html 보내기
    res.sendFile(path.join(__dirname, './html/index.html'));
})

app.get('/',(req, res, next) => {
    // console.log(req);
    // console.log(res);
    // console.log(app.get('test'));
    req.test = "aaatest"
    obj.aa = "aa 변수입니다."
    // res.send('hello world');
    next();
}),(req, res) => {
    console.log(obj.aa);
    console.log(req.method);
    console.log(req.test);
    // res.send('hello get');
    throw new Error('error'); // 강제 에러 발생 근데 매개변수 4개인 미들웨어가 없다.
}

app.post('/', (req, res) => {
    console.log(obj.aa)
    console.log(req.method)
    console.log(req.test)
    res.send('hello post');
})

app.use((err,req,res)=>{
    console.log(err)
    res.status(500).json({'error':'에러가 강제로 발생하였습니다.'});
})

app.listen(app.get('port'), () => {
    console.log('server is runnin on port 3000')
})
