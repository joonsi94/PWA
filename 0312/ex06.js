/*
    1. aa(); // this 전역객체
    2. new aa (); // this {} 생성하는 객체
    3. person.aa(); // person->this입니다.
    4. <tr onclick="aaa(this)"></tr>여기에서 this는 trTag가 된다.
*/

function AA(name){
    this.name = name;
    console.log(this);
}

// 일반함수 호출
AA();
// new AA();
new AA();

// aa가 this로 할당된다.
const aa ={
    name : "LEE",
    getThis(){
        console.log(this);
    }
}

aa.getThis();