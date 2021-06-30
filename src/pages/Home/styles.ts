import styled from 'styled-components'

export const PageAuth = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Main = styled.main`
    flex: 8;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 32px;
`

export const MainContent = styled.div`
    width: 100%;
    max-width: 320px;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    text-align: center;

    > img {
        align-self: center;
    }

    h2 {
        margin: 64px 0 24px;

        font-size: 24px;
        font-family: 'Poppins', sans-serif;
    }

    form {
        input {
            height: 50px;
            padding: 0 16px;

            border: solid 1px var(--gray-300);
            border-radius: 8px;

            background-color: var(--white);
        }

        button {
            margin-top: 16px;
        }

        button, input {
            width: 100%;
        }
    }

    p {
        margin-top: 16px;

        font-size: 14px;

        color:  var(--gray-500);

        a {
            font-weight: 500;

            color: var(--purple-100);
        }
    }
}

    .create-room {
        height: 50px;

        margin-top: 64px;

        border: 0;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        font-weight: 500;

        color: var(--white);
        background-color: var(--red-100);

        transition: filter 200ms;

        img {
            margin-right: 8px;
        }

        &:hover {
            filter: brightness(0.8);
        }

    }

    .separator {
        margin: 32px 0;

        display: flex;
        align-items: center;

        font-size: 14px;
        color: var(--gray-300);

        &::before {
            content: '';
            height: 1px;

            flex: 1;

            margin-right: 16px;
            
            background-color: var(--gray-300);
        }

        &::after {
            content: '';
            height: 1px;

            flex: 1;

            margin-left: 16px;

            background-color: var(--gray-300);
        }
`