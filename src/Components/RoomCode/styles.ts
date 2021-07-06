import styled from "styled-components";

export const RoomCodeButton = styled.button`
    height: 2.5rem;

    border: solid 1px var(--cyan-500);
    border-radius: 8px;

    display: flex;

    cursor: pointer;
    overflow: hidden;

    background-color: var(--white);


    div {
        height: 2.5rem;
        
        padding: 0 0.7rem;

        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: var(--cyan-500);
    }

    span {
        width: 14rem;
        
        padding: 0 1rem 0 0.7rem;
        
        display: block;
        align-self: center;
        flex: 1;
        
        font-size: 0.8rem;
        font-weight: 500;
    }

    @media(max-width: 320px) {
        max-width: 14rem;
    }
`