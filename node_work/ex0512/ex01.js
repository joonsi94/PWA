const path = require('path');
//파일 업로드 할 때
//aa.png 업로드 -> 두개 올림
//덮어씌워진다.원래 글에 파일이름 덮어씌워진다.

//UUID supabase -> uuid
console.log(path.join(__dirname,'b','c','d'));
console.log(path.extname("ex01.js"));
console.log(path.basename("ex01.js"));
console.log(path.dirname("ex01.js"));
console.log(path.parse("ex01.js"));

const {ext,name} = path.parse("ex01.js");

const fileName = `${name}-${Date.now()}${ext}`;
console.log(path.join(__dirname,'images',fileName));