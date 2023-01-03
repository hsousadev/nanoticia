import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.5rem;
  padding: 1.75rem 2.625rem;
  border-radius: 1rem;

  background-color: var(--LIGHT-GREEN);

  p {
    color: var(--DARK-BLUE);
  }

  :hover {
    transition: all 0.5s ease-in-out;
    opacity: 50%;
  }
`;
