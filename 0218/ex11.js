function doPrint(name, age, gender, hegiht, width) {
    console.log("name " + name);
    console.log("age " + age);
    console.log("gender " + gender);
    console.log("hegith " + hegiht);
    console.log("width " + width);
}
doPrint('홍길동', 20, '남자', '180', '65')

const person = {
    name: "홍길동",
    age: 30,
    gender: '남자',
    hegiht: 180,
    width: 65
}
function doPrint2(person) {
    console.log("name " + person.name);
    console.log("age " + person.age);
    console.log("gender " + person.gender);
    console.log("hegith " + person.hegiht);
    console.log("width " + person.width);
}

doPrint2(person);
