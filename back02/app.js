require("dotenv").config();
const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto:wnstjd637@navercom",
  "BPZNPeoSHnavGXPD7lR7WV_JlEl9-EiNZOPM-mDXdLLUXgzOW3zJa-oGhe91lUGVvExNG5dnWQ3np0hAGxlVAMg",
  "yywwB7bRO7I3uUE2PV3_HxJOl5vF3jA6nNQEL1SxcHU"
);

const cors = require("cors");

// const pool = require("./db");
const mymid = require("./mymiddle");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

console.log(mymid.toString());

console.log(morgan().toString());
console.log(cookieParser(process.env.COOKIE_SECRET).toString());

app.use(morgan());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use((req, res, next) => {
//     console.log('무조건 실행');
//     next(); // 다음 미들웨어로 넘어감
// })

app.use(mymid); // 미들웨어 사용

app.get("/", (req, res, next) => {
  console.log("/호출");
  res.send("클라이언트한테 보내기");
});

app.get("/subscribe", (req, res, next) => {
  console.log(req.body);
  res.send("구독 성공");
});

app.listen(8080, () => {
  console.log("서버 8080시작");
});
