//좋지 않은 함수
// let num = 1;

// const incre = function(){
//     let num = 1;

//     num++;
//     console.log(num);
// }

//이것은 num이 다시 초기화 되기 때문에 사용불가
const before_incre = function(){
    let num = 1;
    num++;
    console.log(num);
};


const incre = (function(){
    let num = 1;
    return function(){
        num++;
        console.log(num);
    }
})();

incre();
incre();
incre();