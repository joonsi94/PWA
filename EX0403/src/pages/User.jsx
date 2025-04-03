import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {signUp, supabase} from "../jslib/supa.js";


function User() {
    const {userId} = useParams();
    console.log(userId);
    useEffect(() => {
        supabase.auth.getUser();
    })

    const sign = async () => {
    const {data,error} = await signUp('wnstjd637@naver.com','123123');
    console.log(error);
        Swal.fire({
            title: `${data}`,
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
        });
    };

    return (
        <>
            <div>User</div>
            <button onClick={sign}>회원가입</button>
        </>
    );
}

export default User;