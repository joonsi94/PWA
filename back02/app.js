require("dotenv").config();
const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto:wnstjd637@naver.com",
  "BPZNPeoSHnavGXPD7lR7WV_JlEl9-EiNZOPM-mDXdLLUXgzOW3zJa-oGhe91lUGVvExNG5dnWQ3np0hAGxlVAMg",
  "yywwB7bRO7I3uUE2PV3_HxJOl5vF3jA6nNQEL1SxcHU"
);

const cors = require("cors");
const mymid = require("./mymiddle");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// 미들웨어 로깅은 디버그용으로 필요할 때만
// console.log(mymid.toString());
// console.log(morgan().toString());
// console.log(cookieParser(process.env.COOKIE_SECRET).toString());

app.use(morgan("tiny"));
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(mymid); // 미들웨어 사용

// 서버 시작 시, 푸시 구독 정보 저장 배열
const ss = [];

app.get("/", (req, res, next) => {
  console.log("/ 호출");
  res.send("클라이언트한테 보내기");
});

app.post("/subscribe", (req, res, next) => {
  ss.push({ sub: req.body });
  console.log(ss);
  res.send("구독 성공");
});

app.get("/send", async (req, res, next) => {
  try {
    const payload = JSON.stringify({
      title: "new 알림",
      body: "미세먼지가... 좀... 버스가 몇분 뒤 도착...",
      url: "https://front02-fawn.vercel.app/",
    });

    // 모든 구독자에게 푸시 알림 전송
    const notifications = ss.map(item => {
      console.log('item = ', item);
      return webpush.sendNotification(item.sub, payload);
    });

    console.log('notifications = ', notifications);
    await Promise.all(notifications); // 모든 알림을 전송하고 기다림

    res.json({
      message: "푸시 알람 전송 성공",
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "푸시 알람 전송 실패",
    });
  }
});

app.listen(8080, () => {
  console.log("서버 8080 시작");
});
