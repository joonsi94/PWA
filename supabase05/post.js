document.querySelector('#input-button-post').addEventListener('click',async function() {
    const post = document.querySelector('#post').value;

    if(post.length == 0){
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "후기를 입력하셔야 합니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    const res = await supabase
        .from('post')
        .insert([
            { post }
        ])
        .select();
    console.log(res);
})

const $postDiv = document.querySelector('#post-div');
// $usersDiv.innerHTML = 'asdfasdf';
// $usersDiv.style.backgroundColor = 'rgb(200,100,200)';
// 유저테이블 내용 가져와서 출력하는 함수
async function postSelect() {
    const res = await supabase.from('post').select();
    console.log(res.data);
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
            <tr>
                <td>${res.data[i].id}</td>
                <td>${res.data[i].user_id}</td>
                <td>${res.data[i].post}</td>
                <td>${res.data[i].create_at}</td>
            </tr>
        `;
    }
    let post = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>user_id</th>
                <th>post</th>
                <th>등록날짜</th>
            </tr>
            ${rows}
        </table>
    </div>
    `;
    $postDiv.innerHTML = post;
    $postDiv.classList.add('show')
}