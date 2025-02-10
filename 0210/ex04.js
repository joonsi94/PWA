// const a = "abcdef";
//
// const b = a.indexOf('c')
// console.log(b);

function solution(str1, str2) {
    const test = str1.indexOf(str2);
    console.log(test);
    if(test === -1){
        return 2;  //함수 종료 2를 반환한다
    }
    else{
        return 1;
    }
    // var answer = 0;
    // return answer;
}

const res = solution('ab6CDE443fgh22iJKlmn1o','6CD');
console.log(res);
