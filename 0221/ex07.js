var x = 'global';

function foo(x) {
    // var x = 'local';
    x = 'test'
    console.log(x);
}

foo('test');

console.log(x);