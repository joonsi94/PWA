class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    // prototype에 들어가는 함수
    sayHi() {

    }
    //정적 메서드
    static doA() {

    }
}

const post = new Post("제목제목", "내용내용");
console.log(post);

//항상 이렇게 객체 생성...
const post1 = {
    title: "제목제목",
    content: "내용내용",
    //메모리 낭비를 유발한다.
    sayHi(){

    }
}
console.log(post1);