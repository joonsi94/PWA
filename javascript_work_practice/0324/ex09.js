//res.data.user.id
//supabase.auth.getUser();

const res = {
    data: {
        user: {
            id: 10203020
        }
    }
}

function doA(res) {
    console.log(res.data.user.id);
    console.log("정상종료")
}

doA(res);