const counter = function (callback){
    let count = 0;
    return function(callback){
        count = callback(count);
        return count;
    }

}();

const increase = function(num){
    return ++ num;
}

const decrease = function(num){
    return -- num;
}

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(increase));
console.log(counter(increase));

console.log(counter(decrease));
console.log(counter(decrease));
console.log(counter(decrease));
console.log(counter(decrease));