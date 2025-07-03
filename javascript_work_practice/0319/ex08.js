class Person{
    name = "lee";
    getName = function(){
        return this.name;
    }
    aa(){}
}

const me = new Person();
console.log(me);
console.log(me.getName());