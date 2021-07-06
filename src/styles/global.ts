import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --white: #FFFFFF;

    --gray-50: #EFEFEF;
    --gray-100: #E1E1E6;
    --gray-300: #A8A8B3;
    --gray-500: #737380;
    --gray-800: #29292E;
    --gray-850: #1F2729;
    --gray-900: #121214;

    --cyan-500: #61DAFB;
    --yallow-500: #EBA417;

    --purple-100: #835AFD;

    --red-100: #EA4335;

    --blue-100: #485BFF;
}

* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    color: var(--gray-900);
    background-color: var(--white);
}

body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
}

.react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
}

.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}

.ReactModal__Body--open {
    overflow: hidden;
}

.react-modal-content {
    width: 100%;
    max-width: 590px;

    border: 0;
    border-radius: 8px;

    padding: 3rem;

    background-color: var(--white);
}

@media (max-width: 425px) {
    .react-modal-content {
        max-width: 320px;
    }
}

@media (max-width: 320px) {
    .react-modal-content {
        max-width: 284px;
    }
}
`