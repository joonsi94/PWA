// 객체 분해
function doA({a,b}){
    console.log(a);
    console.log(b);
};

doA({a:20, b:20});


// 배열 분해
function doB([a,b,c],cc){
    console.log(a);
    console.log(b);
    console.log(c);
    cc();
}

doB([10,20,30], function(){ console.log("함수") });