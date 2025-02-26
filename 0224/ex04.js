function doArr(arr,callback){
    console.log(arr);
    console.log(callback);
    arr.forEach(item => {
        callback(item);
    })
    callback(10);
}

doArr([1,2,3],function(item){ 
    console.log("test" + item);
});