import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
