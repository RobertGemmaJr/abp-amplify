import styled from "styled-components"

const MyMenu = styled.div`
    z-index: 10;
`;

export default function Menu(props) {
  return (
    <MyMenu>
      <h1>Menu</h1>       
    </MyMenu>
  );
}