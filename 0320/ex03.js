class AA{
    #name;
    constructor(name,age){
        this.#name = name;
        this.age = age;
    }
    get name(){
        return this.#name;
    }
}

const aa= new AA("Hong",20)
console.log(`aa.age ${aa.age}`);
console.log(aa.name);