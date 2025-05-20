const pool = require("./db");
console.log(pool);

const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan"); //(req,res,next) => {}) // 미들웨어

// console.log(morgan);
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "./public")));
// console.log(express.static(path.join(__dirname,'./public')).toString());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("모든 요청은 여기 들렸다 실행");
  next();
});

app.get(
  "/",
  async (req, res, next) => {
    // console.log('req.body');
    // console.log(req.body);
    // console.log('req.query');
    // console.log(req.query);
    // console.log(req.query.name);
    // console.log(req.query.age);

    const conn = await pool.getConnection(); //연결 객체 가져오기
    const result = await conn.execute("select * from users"); // sql 구문 실행
    // console.log(result); // select * from users 결과물 출력
    conn.release(); // 연결 객체 반환
    next();
    // 끝
    res.status(200).send(result[0]); //클라이언트한테 hello get 보내기
  },
  (req, res, next) => {
    console.log("???");
  }
);

app.post("/", async(req, res) => {
    const conn = await pool.getConnection(); //연결 객체 가져오기
    const result = await conn.execute(`insert into users
                                        (di,password)
                                        values
                                        ('${req.body.name}','${req.body.age}')`); // sql 구문 실행
    // console.log(result); // select * from users 결과물 출력
    conn.release();
  res.send(result);
});

app.put("/", (req, res) => {
  res.send("Hello put");
});

app.delete("/", (req, res) => {
  throw new Error("강제 에러 발생");
  res.send("Hello delete");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("에러 발생");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
