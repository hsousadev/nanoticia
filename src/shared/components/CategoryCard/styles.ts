import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 8.125rem;
  height: 8.125rem;

  gap: 0.5rem;
  padding: 1.75rem 2.625rem;
  border-radius: 1rem;

  background-color: var(--LIGHT-GREEN);

  p {
    color: var(--DARK-BLUE);
    white-space: nowrap;
  }

  :hover {
    transition: all 0.25s ease-in-out;
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    gap: 0;
    padding: 1rem;
    width: 4rem;
    height: 4rem;

    p {
      font-size: 12px;
    }
  }
`;
