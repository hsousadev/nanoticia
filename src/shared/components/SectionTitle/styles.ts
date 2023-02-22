import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  font-size: 32px;
  gap: 0.5rem;

  @media (max-width: 500px) {
    margin-bottom: 1rem;

    svg {
      width: 24px;
      height: 24px;
    }

    font-size: 16px;
  }
`;
