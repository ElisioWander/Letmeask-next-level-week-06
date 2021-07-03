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
`
