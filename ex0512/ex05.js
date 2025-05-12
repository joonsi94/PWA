// 단방향 -> 암호화o -> sha512 방식으로 sha512 100000회 반복 salt

// 양방향 -> 암호화o 복호화o

const crypto = require('crypto');

crypto.randomBytes(64,(err,buf)=>{
    if(err){
        console.error(err);
        return;
    }
    // console.log(buf);
    // console.log(buf.toString());
    const key =buf.toString('base64');
    console.log('key',key);
    crypto.pbkdf2('password', key, 100000,64,'sha512',(err,derivedKey)=>{
        console.log('password',derivedKey.toString('base64'));
    })
})

// 단방향 암호-해시