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
            margin: 16px 0 12px;

            line-height: 34px;
        }

        p {
            color: var(--gray-500);
        }
    }
    
    button {
        margin-top: 42px;
        padding: 12px 32px;

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

        margin-left: 8px;

        border: solid 1px var(--gray-900);

        color: var(--white);
        background-color: var(--cyan-500);
    }
`