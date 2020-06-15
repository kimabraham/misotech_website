import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing:border-box;
    }
    body{
        font-size:10px;
    }
`;

export default globalStyles;
