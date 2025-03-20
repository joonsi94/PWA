// 객체의 프로퍼티 종류는
// 데이터 프로퍼티와 접근자 프로퍼티가 있다.

const person =  {
    // 데이터 프로퍼티 예시
    fName: "Hong",
    lName: "gildong",
    get fullName(){
        return `fname ${this.fName} lName ${this.lName}`;
    },
    set fullName(name){
        [this.fName, this.lName] = name.split(" ");
    }
}

console.log(person);
console.log(person.fullName);