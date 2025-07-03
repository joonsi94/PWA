const ss = Symbol();
if(ss){
    console.log("symbol true")
}

const aa = "asd";
const bb = "";

if(aa){
    console.log("aa true");
}
if(bb){
    console.log("bb true");
}

const cc = {};
if(cc){
    console.log("bin")
}

const dd = cc || "false면 dd"
console.log(dd);