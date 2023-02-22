import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  padding: 2.5rem 0 4rem 0;
  border-top: 1px solid #d9d9d9;

  .highlight {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    gap: 2rem;

    .secondary-highlights {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      width: 100%;
    }
  }

  @media (max-width: 1300px) {
    .highlight {
      .secondary-highlights {
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 2rem;
      }
    }
  }

  @media (max-width: 720px) {
    .highlight {
      .secondary-highlights {
        justify-content: center;
      }
    }
  }
`;
