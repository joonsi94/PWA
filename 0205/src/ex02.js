const a = "큰따옴표 안에 '작은 따옴표'";
console.log(a);

const b = '작은 따옴표 안에 "큰따옴표`안에 백틱\'또 안에 작은따옴표\'`"';
console.log(b);

const c = ` a = ${a} b = ${b}`;
console.log(c);

const d = " a = "+a +" b = "+ b;
console.log(d);

const e = ` a = ${a}

 b = ${b}`;
console.log(e);

// f2 에러 찾아가기
// ctrl + alt l 자동정렬
// alt + 1 <<왼쪽탐색기 영역으로
// alt + n 파일 생성
// alt + f12 터미널 가기
// alt + insert 파일 생성
// esc 키 에디터 창으로 가기