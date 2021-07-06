import styled from "styled-components";

export const PageCreateNewRoom = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 420px 1fr;
    }
`
export const Main = styled.main`
    flex: 8;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 2rem;
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
        margin: 4rem 0 1.5rem;

        font-size: 1.5rem;
        font-family: 'Poppins', sans-serif;
    }

    form {
        input {
            height: 3.2rem;
            padding: 0 1rem;

            border: solid 1px var(--gray-300);
            border-radius: 8px;

            background-color: var(--white);
        }

        button {
            margin-top: 1rem;
        }

        button, input {
            width: 100%;
        }
    }

    p {
        margin-top: 1rem;

        font-size: 0.8rem;

        color:  var(--gray-500);

        a {
            font-weight: 500;

            color: var(--purple-100);
        }
    }

    @media(max-width: 768px) {
        img {
            width: 120px;
        }

        h2 {
            font-size: 1.3rem;
        }
    }
`
