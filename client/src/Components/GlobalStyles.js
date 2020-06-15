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
        transform:skew(-0.001deg);
    }
    body{
        font-family: 'Nanum Myeongjo', sans-serif;
    }
`;

export default globalStyles;
