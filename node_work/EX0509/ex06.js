setImmediate(()=>{
    console.log('immediate');
})
process.nextTick(()=>{
    console.log('process.nextTick');
})
setTimeout(()=>{
    console.log('setTimOut');
},0)

Promise.resolve({name:'홍길동'}).then((data)=>{
    console.log('promise '+data.name);
})

Promise.reject({name:'홍길동'}).catch((data)=>{
    console.log('promise reje'+data.name);
})