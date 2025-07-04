import './App.css';
import axios from "axios";
import {useState} from "react";
import dbusers from "./users.json";
import AirComponent from "./components/AirComponent.jsx";

const backUrl = import.meta.env.VITE_BACK_URL;

function App() {

  // const [users, setUsers]
  //   = useState([{'id': '홍길동', 'password': '1234'}]);

  const [users, setUsers] = useState(dbusers);
  const [supaUsers, setSupaUsers] = useState(dbusers);

  const getUsers = async (event) => {
    const result = await axios.get(backUrl)

    const {data, status} = result;

    setUsers(data);

    console.log(data);
    console.log(status);

  }

  const getSupaUsers = async () => {
      const {data: {data,message}} = await axios.get(`${backUrl}/supauser`)
      console.log(data);
      setSupaUsers(data);
  };

  return (
    <>
      <AirComponent></AirComponent>
      <div>
        <h1 className={`text-3xl`}>
          안녕
        </h1>
        {
          users && users.map((user) =>
            (
              <div key={user.idx}>
                <div >{user.id}</div>
                <div>{user.password}</div>
              </div>
            )
          )
        }
        <button
          className="bg-blue-500
          hover:bg-blue-600
           text-white font-semibold py-2 px-4
           shadow-md hover:shadow-lg
           transition-all duration-300
           ease-in-out
           transform hover:-translate-y-0.5
           focus:outline-none"
          onClick={(event) => {
            getUsers(event);
          }}
        >
          mariadb불러오기
        </button>
          <button
          className="bg-blue-500
          hover:bg-blue-600
           text-white font-semibold py-2 px-4
           shadow-md hover:shadow-lg
           transition-all duration-300
           ease-in-out
           transform hover:-translate-y-0.5
           focus:outline-none"
          onClick={(event) => {
            getSupaUsers(event);
          }}
        >
          supadb불러오기
        </button>
        {
            users && users.map((user) =>
                (
                    <div key={user.id}>
                      <div >{user.email}</div>
                      <div >{user.name}</div>
                      <div>{user.password}</div>
                      <div>{user.create_at}</div>
                    </div>
                )
            )
        }
      </div>
    </>
  )
}

export default App
