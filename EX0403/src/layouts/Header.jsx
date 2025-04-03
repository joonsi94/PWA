import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function Header() {
    // let uid;
    // useEffect(() => {
    //
    // },[])
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">
        <h1>홈</h1>
      </Link>
      <Link to="/contact">
        <h1>연락처</h1>
      </Link>
      <Link to="/about">
        <h1>About</h1>
      </Link>
        <Link to="/user/33d49fbf-490c-4a33-9c3e-55aa7751ef65">
        <h1>MYPAGE</h1>
      </Link>
    </div>
  );
}

export default Header;
