import styled from 'styled-components'

export const PageAuth = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch; 

    overflow: hidden;

    @media (max-width: 425px) {
       display: block;
    }
    
`

export const Main = styled.main`
    flex: 8;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 2.13rem;

    @media(max-width: 425px) {
        overflow: hidden;

        &.on {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            background-color: var(--white);
        }
    }

    .content {
        width: 100%;
        max-width: 320px;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        text-align: center;

        > img {
            align-self: center;
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

        @media (max-width: 768px) {
            > img {
                width: 120px;
            }

            input, button {
                font-size: 0.8rem;
            }
        }

        .create-room {
        height: 3.2rem;

        margin-top: 4rem;

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
            margin-right: 0.5rem;
        }

        &:hover {
            filter: brightness(0.8);
        }

    }

    .separator {
        margin: 2rem 0;

        display: flex;
        align-items: center;

        font-size: 0.8rem;
        color: var(--gray-300);

        &::before {
            content: '';
            height: 1px;

            flex: 1;

            margin-right: 1rem;
            
            background-color: var(--gray-300);
        }

        &::after {
            content: '';
            height: 1px;

            flex: 1;

            margin-left: 1rem;

            background-color: var(--gray-300);
        }
    }
}

@media (max-width: 425px) {
    /* .content {
        display: none;
    }

    .content.on {
        min-width: 425px;

        display: flex;

        position: absolute;

        padding: 7rem 4rem 2rem;

        top: 0;
        bottom: 0;

        background-color: var(--white);
    } */
}

`