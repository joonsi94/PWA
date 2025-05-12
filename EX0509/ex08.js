const os = require('os');
const path = require('path');
const url = require('url');
const fs = require('fs');

// console.log(os.arch);
// console.log(os.cpus);
// console.log(os.freemem);
// console.log(path);

//path.join을 많이 사용하게 된다.
//windows E:\pwa\node_work\ex0509\ex\index.js
//posix E:/pwa/node_work/ex0509/ex/index.js
console.log(path.join(__dirname,'ex','index.js'));
console.log(path.join('ex','index.js'));
// console.log(url);
// console.log(fs);

// const __filename = path.join(__dirname,'ex','index.js');

// const text = fs.readSync(filename)
// console.log(text);