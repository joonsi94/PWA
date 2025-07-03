const test = [
    {
        "id": "d928b37b-6239-4f0a-ad06-82bc9411e84a",
        "name": "Alice",
        "email": "alice@example.com",
        "created_at": "2025-03-05T06:01:59.243764",
        "active": true
    },
    {
        "id": "4d732de9-e2ea-4f17-b79a-7fbc1881d2f1",
        "name": "Bob",
        "email": "Bob@naver.com",
        "created_at": "2025-03-05T06:05:23.662955",
        "active": true
    },
    {
        "id": "0dcfb2ac-1696-40d8-ac52-4ea855fe5d32",
        "name": "qwer",
        "email": "bbb@naver.com",
        "created_at": "2025-03-05T06:58:36.31441",
        "active": true
    }
]

let rows = '';
for(let i = 0; i<test.length; i++){
    rows = rows + `<tr>
        <td>${test[i].id}</td>
        <td>${test[i].name}</td>
        <td>${test[i].email}</td>
        <td>${test[i].created_at}</td>
        <td>${test[i].active}</td>
    </tr>`;
}

let users =`
<div>
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>가입날짜</th>
            <th>활성화</th>
        </tr>
        ${rows}
    </table>
</div>
`;
console.log(users);