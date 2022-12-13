// pages/Buy.js

import queryString from "query-string";

const Buy = ({location}) => {
    //location 을 구조분해 할당 받아서 search라는 방에 있는 문자열을 확인하기
    console.log(location.search);

    //queryString 함수를 이용해서 query 문자열을 파일해서 object 얻어내기
    const parsed = queryString.parse(location.search);
    console.log(parsed);

    const buyStyle = {
        backgroundColor:"#cecece",
        height:"300px"
    };

    return (
        <div style={buyStyle}>
            <h3>home 페이지 입니다.</h3>
            <p>
                <strong>{parsed.code}</strong>번 상품
                <br />
                <strong>{parsed.name}</strong>을 주문하였습니다.
            </p>
        </div>
    );
}

export default Buy;