var i =0;

abc:while( true ) {
    while (true) {
        console.log(i);
        i++;
        if (i == 3) { //break;
            break abc;
        } //괄호 없으면 한줄로 써줘도 됨
    }
}

console.log("for구문 시작")
i=0;
for(;;){
    console.log(i);
    i++;
    if (i==3) break;
}