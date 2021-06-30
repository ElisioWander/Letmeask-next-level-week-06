import styled from "styled-components";

export const PageCreateNewRoom = styled.div`
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
`
