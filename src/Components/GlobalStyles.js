import { createGlobalStyle } from "styled-components"; //웹사이트 전체에 적용되는 global CSS 생성 모듈
import { reset } from "styled-reset"; //기본적으로 적용된 css 설정을 모두 없애기 위해 reset 사용

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-size:12px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;