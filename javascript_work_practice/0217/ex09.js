//const f = (x,y)=> x+y; //함수 몸체에 한줄만 가능
const f = (x, y) => { return x + y; } //함수 몸체에 여러줄 가능

//중괄호{}가 있으면 안에 return을 꼭 적어줘야 함
//if 문에서 생략가능한 경우는 한줄...
//if(a===10) console.log(10);
//if 문에서 {} 두줄일 경우

const res = f(10, 20);
console.log(res);