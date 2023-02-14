import styled, { css } from "styled-components";

interface ContainerProps {
  style: string;
}

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    props.style === "bigHorizontal" &&
    css`
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2.5rem;
      margin-top: 2rem;

      img {
        border-radius: 1rem;
      }

      .info {
        width: 100%;
        max-width: 300px;

        h4 {
          color: var(--GREEN);
          margin-bottom: 1.5rem;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        h2 {
          margin-bottom: 1.5rem;
          line-height: 2.5rem;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }

        p.description {
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          margin-bottom: 2rem;
          line-height: 1rem;
          color: black;
        }

        p.publishedAt {
          margin-bottom: 0.5rem;
          color: var(--GRAY);
        }

        P {
          color: var(--GREEN);
        }
      }
    `};

  ${(props) => props.style === "horizontal" && css``};
  ${(props) => props.style === "vertical" && css``};
`;
