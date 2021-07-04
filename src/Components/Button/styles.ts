import styled from "styled-components";

export const ButtonStyled = styled.button`
    height: 2.5rem;

    padding: 0 1rem;

    border: 0;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    font-weight: 500;

    color: var(--white);
    background-color: var(--blue-100);

    transition: filter 200ms;

    &.outlined {
        border: solid 1px var(--blue-100);

        color: var(--blue-100);
        background-color: var(--white);
    }

    &:not(:disabled):hover {
        filter: brightness(0.9);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 375px) {
        font-size: 0.8rem;
    }
`