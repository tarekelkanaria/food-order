import styled, { css } from "styled-components";

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 50rem;
  color: white;
  font-weight: bold;

  ${(props) =>
    props.cartIcon &&
    css`
      width: 4rem;
      text-align: center;
      background-color: #ba4724;
      padding: 0.5rem 1rem;
    `}
`;
export default Button;
