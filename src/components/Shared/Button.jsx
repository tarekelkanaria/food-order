import styled, { css } from "styled-components";

const Button = styled.button`
  display: block;
  border: none;
  color: white;
  font-weight: bold;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  border-radius: 20rem;
  padding: 0.8rem 3rem;
  max-width: 8em;
  cursor: pointer;
}
  &:hover,
  &:active {
    background-color: ${(props) =>
      props.cartIcon ? "#92320c;" : props.quantity ? "" : "#641e03;"};
    border-color: ${(props) =>
      props.cartIcon ? "" : props.quantity ? "" : "#641e03;"};
  }

  ${(props) =>
    props.cartIcon &&
    css`
      padding: 0.5rem 1rem;
      width: 4rem;
      text-align: center;
  }
    `};
  ${(props) =>
    props.cartList &&
    css`
      padding: 0.5rem 1rem;
      text-align: center;
      width: 5rem;
      border-radius: 1rem;
      background-color: transparent;
      border: 1px solid #ba4724;
      color: #ba4724;
  }
    `};
  ${(props) =>
    props.quantity &&
    css`
      color: #363636;
      font-weight: bold;
      padding: 0.25rem 0.75rem;
      cursor: auto;
      border: 1px solid #ccc;
  }
    `};
  ${(props) =>
    props.actions &&
    css`
      padding: 0.25rem 1rem;
      font-size: 2rem;
      font-weight: bold;
      color: #8a2b06;
      border: 1px solid #8a2b06;
      width: 3rem;
      text-align: center;
      background-color: transparent;
      border-radius: 0.6rem;
    }
    &:hover,
    &:active{
      background-color: #8a2b06;
      color: white;
    }  
    `};
  ${(props) =>
    props.cartOrder &&
    css`
      padding: 0.8rem 2rem;
      font-size: 1.6rem;
      font-weight: normal;
      color: white;
      background-color: #8a2b06;
      border: 1px solid #8a2b06;
  }
      &:hover,
      &:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
      }
    `};
  ${(props) =>
    props.cartClose &&
    css`
      padding: 0.8rem 2rem;
      font-size: 1.6rem;
      font-weight: normal;
      color: #8a2b06;
      background-color: transparent;
      border: 1px solid #8a2b06;
  }
      &:hover,
      &:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
      }
    `};
`;
export default Button;
