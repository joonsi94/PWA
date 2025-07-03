Set.prototype.isSuperSet = function(set){
    return [...set].every((item)=>this.has(item));
};

const setA = new Set([1,2,3]);
const setB = new Set([2,3]);

console.log(setA.isSuperSet(setB));
console.log(setB.isSuperSet(setA));