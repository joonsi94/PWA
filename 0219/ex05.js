//node 환경엣는 window 출력되지 않음
//console.log(window);

// function countDown(n){
//     for(var i = n; i > -1; i--){
//         console.log(i);
//     }
// }

function countDown(n){
    console.log("호출됨");
    if(n<0) return; //(조건)에 충족되면 종료
    console.log(n);
    countDown(n-1);
}

countDown(10);