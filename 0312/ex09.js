const obj = {
    value: 100,
    foo(){
        // console.log(this.value);
        // const that = this;
        setTimeout(function(){
            console.log("콜백함수")
            // console.log(this);
            console.log(this.value);
            // console.log(that.value);
        }.bind(this), 2000);
    }
}

obj.foo();