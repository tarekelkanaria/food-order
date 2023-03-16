import styled, { css } from "styled-components";

const Container = styled.section`
  width: 75%;
  padding: 2rem;
  margin: 3rem auto 2rem;
  background-color: white;
  border-radius: 1.4rem;
  -moz-box-shadow: 0px 2px 14px 10px rgba(250, 250, 250, 0.25),
    0px -2px 18px 10px rgba(250, 250, 250, 0.25);
  -webkit-box-shadow: 0px 2px 14px 10px rgba(250, 250, 250, 0.25),
    0px -2px 18px 10px rgba(250, 250, 250, 0.25);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25), 0px -2px 8px rgba(0, 0, 0, 0.25);
  animation: ${(props) =>
    props.cart
      ? "slide-down 0.3s linear;"
      : "meals-appear 1s linear forwards;"};
    }
    @keyframes meals-appear {
      from {
        opacity: 0;
        transform: translateY(6rem);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slide-down {
      from {
        opacity: 0;
        top: -6rem;
      }
      to {
        opacity: 1;
        top: 0rem;
      }
    }
  ${(props) =>
    props.modalContainer &&
    css`
      position: relative;
      z-index: 3;
    `};
`;

export default Container;
