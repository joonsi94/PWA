import { ordersMInsert, usersMInsert, usersSelectByEmail } from "./db.js";

// usersMInsert();
// usersSelectByEmail('qqq@naver.com')
const userid = await usersSelectByEmail('qqq@naver.com');
ordersMInsert(userid);