/* Root.js */

import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Root = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}

//App을 감싼 BrowserRouter를 랜더링 해주는 Root component 리턴해주기
export default Root;