require("dotenv").config();
const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto:wnstjd637@navercom",
  "BPZNPeoSHnavGXPD7lR7WV_JlEl9-EiNZOPM-mDXdLLUXgzOW3zJa-oGhe91lUGVvExNG5dnWQ3np0hAGxlVAMg",
  "yywwB7bRO7I3uUE2PV3_HxJOl5vF3jA6nNQEL1SxcHU"
);

const cors = require("cors");

const pool = require("./db");
const mymid = require("./mymiddle");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { url } = require("inspector");

const app = express();

console.log(mymid.toString());

console.log(morgan().toString());
console.log(cookieParser(process.env.COOKIE_SECRET).toString());

app.use(morgan("tiny"));
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

// 서버 시작 누르기 되면 배열 값 삭제
// 배열이기 때문에 서버 재시작 하면 프론트 정보 사라짐
// DB에 넣어야 함.
const ss = [];

app.get("/", (req, res, next) => {
  console.log("/호출");
  res.send("클라이언트한테 보내기");
});

app.post("/subscribe", async (req, res, next) => {
  try{
  console.log(req.body);
  // const {endpoint} = req.body;
  // console.log(req.body.sub);
  // console.log(req.body.sub.endpoint);
  // console.log(req.body.sub.keys.p256dn);
  // console.log(req.body.sub.keys.auth);
  // console.log(req.body.city);

  const conn = await pool.getConnection();
  const sql = "insert into subscriptions(endpoint,p256dh, auth, city) values(?,?,?,?)";
  const result =
  await conn.execute(sql, [req.body.endpoint,req.body.sub.keys.p256dh,req.body.sub.keys.auth,req.body.city]);

  conn.release();
  res.send(result)
  } catch(e){
    console.log(e);
  }

  // ss.push({sub:req.body});
  // console.log(ss);
  res.send("구독 성공");
});

app.get("/send", async(req, res, next) => {
  try{
    const payload = JSON.stringify({
      title:"new 알림",
      body:"미세먼지가... 좀... 버스가 몇분뒤 도착...",
      url:"https://front02-fawn.vercel.app/",
    });
    const notifications = result[0].map((item) => {
      console.log('item = ', item);
      const temp = {
        endpoint: item.endpoint,
        expriration: null,
        keys: {
          p256dh: item.p256dh,
          auth: item.auth,
        }
      };
      console.log("temp = ",temp)
      return webpush.sendNotification(item.sub,payload);
    })
    console.log('notifications = ', notifications);
    await Promise.all(notifications);

    res.json({
      message: "푸시 알람 전송 성공",})
  } catch(e){
    console.log(e);
    res.json({
      message: "푸시 알람 전송 실패",})
  }
});

app.listen(8080, () => {
  console.log("서버 8080시작");
});
