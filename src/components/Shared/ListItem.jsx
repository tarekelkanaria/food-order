import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) =>
    props.homeItem ? "#ccc;" : props.total ? "transparent;" : "#8a2b06;"};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  }
  @media(max-width: 767px) {
    &{
      justify-content: space-around;
    }
  }
  & span{
    color: ${(props) =>
      props.homeItem ? "#ad5502;" : props.cartItem && "#8a2b06;"};
    font-weight: bold;
  }
  & h3 {
  font-size: 1.8rem;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.cartItem && "#363636;"};
}
`;

export default ListItem;
