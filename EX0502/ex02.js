function a(){
    let sum = 0;
    for(let i = 0; i < 10_000_000_000; i++)
    {
        sum+=i;
    }
    console.log(sum)
}

console.log('오래걸리는거 시작 블로킹');
// a();
setTimeout(a,0);
setTimeout(a,0);
setTimeout(a,0);
console.log('오래걸리는거 끝 블로킹');
//중요하게 되면