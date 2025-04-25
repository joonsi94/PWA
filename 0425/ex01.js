fetch('http://localhost:5000/todo',
    {
        method:"POST",
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({
            todo: "배고프다",
            completed: false
        }),
    })
.then(res=>res.json())
.then(data=>{
    console.log(data);
})