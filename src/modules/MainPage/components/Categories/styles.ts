import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 4rem;
  flex-wrap: wrap;

  @media (max-width: 1320px) {
    justify-content: flex-start;
    gap: 2.5rem;
  }

  @media (max-width: 720px) {
    flex-wrap: unset;
    justify-content: flex-start;
    overflow-x: scroll;
    padding-bottom: 1rem;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    gap: 0.5rem;
    padding-right: 2rem;
  }
`;
