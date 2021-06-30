import styled from "styled-components"

export const AsideStyled = styled.aside`
  flex: 7;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 88px;

  color: var(--white);
  background-color: var(--cyan-500);

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;

    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;

    margin-top: 16px;

    color: var(--gray-100);
  }
`
