function foo(){
    this.a =10;
    this.b = 20;
    console.log(this);
}

// foo();
// new foo();

const obj = {a:foo};
obj.a();