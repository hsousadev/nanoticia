import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  padding: 1.5rem 0 0 0;
  border-top: 1px solid var(--LIGHT-GRAY);
  margin-bottom: 1.5rem;

  width: 100%;

  .news {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .see-more-news {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      h4 {
        color: var(--GREEN);
      }
    }
  }

  @media (max-width: 1180px) {
    .news {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
