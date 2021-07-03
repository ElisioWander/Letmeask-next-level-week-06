import styled from "styled-components"

export const PageRoom = styled.div`
`

export const Main = styled.main`
  max-width: 800px;

  margin: 0 auto;

  .room-title {
    margin: 2rem 0 1.5rem;

    display: flex;
    align-items: center;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;

      color: var(--gray-800);
    }

    span {
      margin-left: 1rem;
      padding: 0.5rem 1.5rem;

      border-radius: 9999px;

      font-size: 1.5rem;
      font-weight: 500;

      color: var(--white);
      background-color: var(--cyan-500);
    }
  }

  .question-list {
    margin: 2rem 0 4rem;
  }
`