import styled from "styled-components"

export const PageRoom = styled.div`
`

export const Main = styled.main`
  max-width: 800px;

  margin: 0 auto;

  .room-title {
    margin: 32px 0 24px;

    display: flex;
    align-items: center;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 24px;

      color: var(--gray-800);
    }

    span {
      margin-left: 16px;
      padding: 8px 16px;

      border-radius: 9999px;

      font-size: 24px;
      font-weight: 500;

      color: var(--white);
      background-color: var(--cyan-500);
    }
  }

  .question-list {
    margin: 32px 0 64px;
  }
`