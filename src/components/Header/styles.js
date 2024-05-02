import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 6rem;

  > img {
    height: 6rem;
  }

  > ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
