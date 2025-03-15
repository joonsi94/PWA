const aa = require('randomcolor');
const readline = require('readline/promises');

//node에서 내장객체
//global process
// console.log(process)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getInput() {
    const name = await rl.question('이름을 입력해봐\n');
    console.log(`name = ${name}`);
    rl.close();
};

getInput();
// rl.question('이름입력해봐\n', name =>{
//     console.log(`name = ${name}`);
//     rl.close();
// })

// console.log(readline);
// console.log(aa());