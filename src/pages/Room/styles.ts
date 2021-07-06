import styled from "styled-components";

export const PageRoom = styled.div`
  @media(max-width: 425px) {
    .content {
      display: block;
    }
  }
`;

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
      padding: 0.5rem 1rem;

      border-radius: 9999px;

      font-size: 1.5rem;
      font-weight: 500;

      color: var(--white);
      background-color: var(--cyan-500);
    }
  }

    .question-list {
      margin: 2.6rem 0 4rem;
    }

    @media (max-width: 768px) {
    max-width: 662px;

    .room-title {
      span {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 425px) {
    max-width: 420px;

    padding: 2rem;

    .room-title {
      display: block;

      margin: 0;

      h1 {
        font-size: 1.5rem;
      }

      span {
        display: inline-block;
        margin: 1rem 0 0;

        font-size: 1rem;
      }
    }
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    min-height: 130px;

    padding: 1rem;

    border: 0;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    resize: vertical;

    background-color: var(--gray-50);
  }

  .form-footer {
    margin-top: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;

        border-radius: 50%;

        padding: 1px;

        background-color: var(--cyan-500);
      }

      span {
        margin-left: 0.5rem;

        font-size: 0.8rem;
        font-weight: 500;

        color: var(--gray-800);
      }
    }

    > span {
      font-size: 0.5rem;
      font-weight: 500;

      color: var(--gray-500);

      button {
        border: 0;
        cursor: pointer;
        text-decoration: underline;

        font-size: 0.8rem;
        font-weight: 500;

        color: var(--blue-100);
        background-color: transparent;
      }
    }
  }

  @media(max-width: 425px) {
    margin-top: 2rem;

    .form-footer {
      display: block;

      span {
        font-size: 0.8rem;

        button {
          font-size: 0.9;
        }
      }
    }

    button {
      margin-top: 1rem;
    }
  }
`;