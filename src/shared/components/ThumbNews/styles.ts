import styled, { css } from "styled-components";

interface ContainerProps {
  design: string;
  hasImage: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  :hover {
    .thumb-image {
      div {
        transition: all 0.5s;
        transform: scale(1.1);
      }
    }

    img {
      transition: all 0.5s;
      transform: scale(1.1);
    }
  }

  .thumb-image {
    border-radius: 1rem;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
      !props.hasImage &&
      css`
        border: 1px solid #65d2ae;
      `}

    > div {
      transition: all 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;

      h4 {
        margin: 0;
        color: #65d2ae;
      }
    }

    img {
      transition: all 0.5s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    width: 100%;
    max-width: 300px;

    h2 {
      margin-bottom: 1.5rem;
      line-height: 2.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    h4 {
      transition: all 0.5s;
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

  ${(props) =>
    props.design === "highlight" &&
    css`
      .thumb-image {
        width: 600px;
        height: 400px;
      }
      gap: 2.5rem;

      h4 {
        color: var(--GREEN);
        margin-bottom: 1.5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    `};

  ${(props) =>
    props.design === "vertical" &&
    css`
      .thumb-image {
        width: 300px;
        height: 180px;
      }

      margin-top: 0;
      flex-direction: column;
      gap: 1.5rem;

      h4 {
        margin-bottom: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    `};

  ${(props) => props.design === "horizontal" && css``};

  @media (max-width: 500px) {
    width: 100%;

    .thumb-image {
      width: 100%;

      img {
        object-fit: cover;
      }
    }

    p {
      font-size: 12px;
    }

    h4 {
      font-size: 16px;
      margin-bottom: 0.5rem;
    }

    .info {
      p.publishedAt {
        margin-bottom: 0.25rem;
      }
    }
  }
`;
