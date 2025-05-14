//단방향 암호화
// const crypto = require('crypto')

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    console.log(req.url);
    try {
        if (req.url === '/') {
            const password = '비밀번호';    //숨겨진 데이터

            const indexhtml = await fs.readFile('./index.html')
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            return res.end(indexhtml);
        } else if (req.url === '/join' && req.method !== 'POST') {
            // 한글이 들어오는 거 맞추기 위해서 utf-8로 인코딩
            req.setEncoding('utf-8');

            //body 문자열 선언
            let body = '';
            //request 요청 한 클라인트 data로 들어오는게 있으면
            //data를 모아서 body에 넣ㅇ준다.
            req.on('data', (data) => {
                body += data;
            })

            console.log(body);

            const obj = {name:'홍길동', age:20};
            res.writeHead(200, {'Content-Type':  'application/json; charset=utf-8'});
            return res.end(JSON.stringify(obj));
        } else if (req.url === '/login') {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            return res.end('로그인 성공');
        }

        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        return res.end('잘못된 경로입니다.')

    } catch (e) {
        console.log(e);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(e.message);
    }
    // res.end('<html><body><h1>안녕</h1></body></html>\n');
}).listen(8080, '0.0.0.0', () => {
    console.log('8080 포트에서 서버 대기중');
});