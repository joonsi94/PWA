var x = 'global x';
var y = 'global y';
var z = 'global z';


function outer(){
    var z = 'outer local z';

    // console.log(`x = ${x}`);
    // console.log(`x = ${z}`);
    // console.log(`x = ${y}`);

    function inner(){
        var x = 'inner local x';

        console.log(`x = ${x}`);
        console.log(`x = ${y}`);
        console.log(`x = ${z}`);
    }
    inner();
}

outer();
console.log(x);
// console.log(z);