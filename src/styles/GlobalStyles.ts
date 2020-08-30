/**
 * IMPORTS
 */
import {createGlobalStyle} from 'styled-components';
import 'antd/dist/antd.css';

/**
 * CODE
 */
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100vh;
        min-width: 100vw;
        overflow-x: hidden;
    }

    body {
        background: var(--color-background);
    }

    *, button, input {
        font-family: 'Poppins', -apple-system, system-ui, sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    :root {
        --color-background: #F9F9F9;
        --color-black: #0D0D0D;
        --color-gray-light: #E6E6E6;
        --color-gray: #C7C7C7;
        --color-orange-light: #FF852E;
        --color-orange: #E66E1E;
        --color-white: #FFFFFF;
        --color-warning: #ee5353;

        --border-radius: 5px;
    }
`;

/**
 * EXPORTS
 */
export default GlobalStyle;
