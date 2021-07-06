import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 24px;

  border-bottom: solid 1px var(--gray-100);

  .content {
    max-width: 1120px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
        & img {
          max-height: 2.8rem;
        }
    }

    svg {
      display: none;
    }

    > div {
      display: flex;
      gap: 1rem;
    }
  }
  @media(max-width: 1024px) {
    .content {
      max-width: 850px;
    }
  }

  @media(max-width: 425px) {
    .content {
      a {
        margin-bottom: 3.5rem;

        img {
          display: none;
        }

        svg {
          display: initial;

          width: 34px;
          height: 34px;

          color: var(--cyan-500);
        }
      }
      > div {
        display: flex;
        flex-direction: column;
        > div .close-room-button {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`;
