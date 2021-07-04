import styled from "styled-components"

export const AsideStyled = styled.aside`
  flex: 7;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7.5rem 5.5rem;

  color: var(--white);
  background-color: var(--cyan-500);

  img {
    max-width: 320px;
  }

  strong {
    font: 700 2.2rem "Poppins", sans-serif;
    line-height: 2.6rem;

    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;

    margin-top: 1rem;

    color: var(--gray-100);
  }

  @media (max-width: 768px) {
    strong {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 425px) {
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 240px;
    }

    strong {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }

    button {
      display: initial;

      height: 2.5rem;

      margin-top: 2rem;
      padding: 1rem 1rem;

      border: 0;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      font-weight: 500;

      color: var(--white);
      background-color: var(--blue-100);

      transition: filter 2ms;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
