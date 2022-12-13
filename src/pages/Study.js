// pages/Study.js

import { NavLink } from "react-router-dom";

const Study = () => {

    const studyStyle = {
        backgroundColor:"yellow",
        height:"300px"
    };

    return (
        <div style={studyStyle}>
            <h3>study 페이지 입니다.</h3>
            <p>어쩌구 저쩌구</p>
            <NavLink to="/">홈으로</NavLink>
        </div>
    );
}

export default Study;