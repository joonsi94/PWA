const obj1 = {
    name: 'Bob',
    sayHi: function () {
        setTimeout(function () {
            console.log(this.name);
        }.bind(this), 1000);
    }
}

//function.prototype.call
//function.prototype.apply
//function.prototype.bind

const obj2 = {
    name: 'Bob',
    sayHi: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
}

obj1.sayHi();
obj2.sayHi();