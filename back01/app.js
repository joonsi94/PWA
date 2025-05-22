const pool = require("./db");
const express = require("express"); //http 모듈 확장한 프레임워크
const path = require("path"); // 경로를 관리 모듈
const morgan = require("morgan"); // (req,res,next=>{}) 미들웨어'
const cookieParser = require("cookie-parser");
// 기록 남기는 모듈
// 프론트가 직접 보내줘ㅓ야 서버에서 받을 수 있음
// req.body => { name:"홍길동" }
// req.query => laclahost:8080/?aa=10&b=20
// localhost:8080/
// haha hoho haha -> asdfweiorrrrrufoixjuvcoxjkla
// application -> Cookie -> 자동으로 요청할 때 날아감

const app = express(); // express 객체 생성

// app.use(morgan("dev")); // 개발단계
// app.use(morgan("combined")); // 실제 운영 배포에서 사용
// console.log(morgan("dev").toString());

// public 폴더에 해당하는 파일이 있으면 클라이언트한테 준다.
// images 클라이언트가 접속 방법 설정
app.use("/images", express.static(path.join(__dirname, "public")));
// console.log(express.static(path.join(__dirname, "public")).toString());

//req.body 파라메타를 받아주는거 {id:"aaa@naver.com"}
app.use(express.json());
//req.query ?aa=10
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

console.log(process.env.COOKIE_SECRET);

app.use((req, res, next) => {
//   console.log(req.body);
//   console.log(req.query);
  console.log("모든 요청은 여기 들렸다가 진행된다.");
  next();
});

app.get("/setCoo", (req, res, next) => {
    console.log('test');
    res.cookie('haha','hoho',{
        expires: new Date(Date.now()+1000*60),
        httpOnly: true,
        secure: true,
        signed: true
    });
    res.send('여기옴');
})

app.get("/getCoo", (req, res, next) => {
    console.log(req.cookies);
    res.send('저기옴');
})

app.get(
  "/",
  async (req, res, next) => {
    // console.log('req.body');
    // console.log(req.body);
    // console.log('req.query');
    // console.log(req.query);
    // console.log(req.query.name);
    // console.log(req.query.age);

    const conn = await pool.getConnection();
    const result = await conn.execute("select * from users");
    conn.release();
    next();
    // 끝...
    // res.status(200).json(result[0]);
    res.status(200).json({aa:10,bb:20});
  },
  (req, res, next) => {
    console.log("일로오나");
    // res.json('이거 두번 보내기 되냐');
  }
);

//insert
app.post("/", async (req, res) => {
  const conn = await pool.getConnection();
  const result = await conn.execute(`insert into users 
                                     (id,password)
                                     values
                                     ('${req.body.name}','${req.body.age}')`); // sql 구문 실행
  conn.release();
  res.send(result);
});

//update req.body 클라이언트 3개...id password idx
//update users set id=?, password=? where idx=?
//supabase.from('users').update([{id:10, password:20}]).eq('idx',16)
app.put("/", async(req, res) => {
    console.log(req.body);
    const conn = await pool.getConnection();
    const sql = "update users set id=?, password=? where idx=?";
    const result = await conn.execute(sql,[
        req.body.id, 
        req.body.password, 
        req.body.idx
    ]);
    conn.release(); //연결객체 반환
  res.send(result);
});
app.delete("/", (req, res) => {
  throw new Error("강제에러 발생");
  res.send("hello delete");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

//모든 에러는 이쪽으로 진행
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("에러가발생하였습니다.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
