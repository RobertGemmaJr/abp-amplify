import styled from "styled-components"

import Subtitle from "./Subtitle"

const MyTitle = styled.div`
  text-align: center;
  padding: 2%;

  h1 {
    margin-top: 0;
    margin-bottom: 0.5%;
  }
`;

export default function Title(props) { 
  return (
    <MyTitle onClick={props.onClick}>
      <h1>Apple Blossom Preschool</h1>
      <Subtitle text={props.subtitle} />
    </MyTitle>
  )
}