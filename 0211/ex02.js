var a = 10;

// for(;;) {
//     console.log("1 "+a);
//     a++;
//     if(a === 20){
//         break;
//     }
// }
var a = 10;

while (true){

    if (a == 15){
        continue;
    }
    a = a+1; // = a++ a+=1
    console.log("1 "+a);
    if(a === 20){
        break;
    }
}