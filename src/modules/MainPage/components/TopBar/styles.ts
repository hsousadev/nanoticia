import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .date-temperature {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    h4 {
      color: #828282;
    }
  }

  @media (max-width: 720px) {
    justify-content: space-between;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 500px) {
    img {
      width: 144px;
      height: 24px;
    }

    h4 {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    .date-temperature {
      flex-direction: column;
      gap: 0;
    }
  }
`;
