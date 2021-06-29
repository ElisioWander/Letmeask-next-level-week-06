import styled from "styled-components";

export const PageRoom = styled.div``;

export const Header = styled.header`
  padding: 24px;

  border-bottom: solid 1px var(--gray-100);

  .content {
    max-width: 1120px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      max-height: 45px;
    }
  }
`;

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
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    min-height: 130px;

    padding: 16px;

    border: 0;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    resize: vertical;

    background-color: var(--gray-50);
  }

  .form-footer {
    margin-top: 16px;

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
        margin-left: 8px;

        font-size: 14px;
        font-weight: 500;

        color: var(--gray-800);
      }
    }

    > span {
      font-size: 14px;
      font-weight: 500;

      color: var(--gray-500);

      button {
        border: 0;
        cursor: pointer;
        text-decoration: underline;

        font-size: 14px;
        font-weight: 500;

        color: var(--blue-100);
        background-color: transparent;
      }
    }
  }
`;