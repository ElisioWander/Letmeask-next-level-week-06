import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;

    div {
        text-align: center;

        img {
            width: 48px;
            height: 48px;
        }

        h2 {
            margin: 1rem 0 0.7rem;

            line-height: 2.1rem;
        }

        p {
            color: var(--gray-500);
        }
    }
    
    button {
        margin-top: 2.6rem;
        padding: 0.7rem 2rem;

        cursor: pointer;

        border: 0;
        border-radius: 8px;

        font-weight: 500;

        color: var(--gray-500);
        background-color: var(--gray-100);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    button + button {
        width: 159px;

        margin-left: 0.5rem;

        border: solid 1px var(--gray-900);

        color: var(--white);
        background-color: var(--cyan-500);
    }
`