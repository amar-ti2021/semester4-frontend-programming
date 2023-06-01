import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => {
    return props.theme.colors[props.variant] || props.theme.colors["primary"];
  }};
  color: #fff;
  cursor: pointer;
  ${({ full }) => {
    return (
      full &&
      css`
        width: 100%;
        display: block;
      `
    );
  }};
  ${(props) => {
    return props.theme.size[props.size] || props.theme.size["md"];
  }};
`;
export default Button;
