import styled from "styled-components"

const MyMenu = styled.div`
    z-index: 10;
    h1 {
      margin: 0;
    }
`;

export default function Menu(props) {
  return (
    <MyMenu>
      <h1>Foo Bar</h1>       
    </MyMenu>
  );
}