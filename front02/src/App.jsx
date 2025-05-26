import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

const API_URL = import.meta.env.VITE_API_NODE_URL;

function App() {

    const [test, setTest] = useState("안녕 test");
    const getRoot = async () => {
        // console.log("getRoot")
        // const result = await axios.get('http://localhost:8080/')
        // console.log(result.data);

        const {data,error} = await axios.get(`${API_URL}`)
        console.log(data);
        console.log(error);

        setTest(data);

        //화면 랜더링 아님 그냥 메모리에 test 변수에다가 data로 값 바꾸는 것
        //화면 랜더링 하려면 useState사용해야함
        // test = data;
        // document.getElementById('aa').innerHTML=data;
    }
    
    // useEffect(() => {
    //     document.getElementById('aa').innerHTML = test;
    // },[]);  //이건 그냥 HTML임 React 아님

    useEffect(() => {
        if ("serviceWorker" in navigator && "PushManager" in window) {
            console.log("serviceWorker");
            navigator.serviceWorker.ready.then((registration) => {
                console.log("service worker ready");
                registration.pushManager
                    //공개키 설정
                    .subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: "BPZNPeoSHnavGXPD7lR7WV_JlEl9-EiNZOPM-mDXdLLUXgzOW3zJa-oGhe91lUGVvExNG5dnWQ3np0hAGxlVAMg",
                    })
                    .then((subscription) => {
                        return fetch(`${API_URL}/subscribe`, {
                            method: "POST",
                            body: JSON.stringify(subscription),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                    })
                    .catch((error) => {
                        console.error("푸시 구독 실패:", error);
                    });
            });
        }
    }, []);

    return (
        <>
            <h1>Hello React</h1>
            <p id="aa">Hello React + {test}</p>
            {/*<button onClick={getRoot}>백엔드 요청</button>*/}
            <button onClick={
                () => {
                    // console.log("getRoot")
                    getRoot()
                }
            }>백엔드 요청
            </button>
        </>
    )
}

export default App
