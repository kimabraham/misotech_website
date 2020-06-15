import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
        @font-face {
        font-family: 'NanumSquare';
        src: url(../assets/font/NanumSquareR.eot);
        src: url(../assets/font/NanumSquareR.eot?#iefix) format('embedded-opentype'),
        url(../assets/font/NanumSquareR.woff) format('woff'),
        url(../assets/font/NanumSquareR.ttf) format('truetype');}
        font-family: 'NanumSquare', sans-serif;
        font-size:10px;
    }
`;

export default globalStyles;
