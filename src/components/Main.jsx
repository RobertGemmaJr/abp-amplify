import styled from "styled-components";
import { useState } from "react"

import Title from "./Title";
import Content from "./Content"
import Search from "./Search";
import Menu from "./Menu"

const MyMain = styled.main`
  padding-top: 2%;
  flex: 1; // App flex, push footer to bottom of page

  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * 
 * @param {*} props 
 * @returns The central body of the application
 */
export default function Main(props) {
  // Hook for subtitle text
  const [qType, setQType] = useState(true)
  const qText = qType ? "Morning Questions" : "Afternoon Questions"

  return(
    <MyMain >
      <Title 
        onClick={() => setQType(!qType)}
        subtitle={props.showMenu ? "Menu" : qText }
      />
      <Content>
        {props.showMenu ? <Menu /> : null}
        <Search />
      </Content>
    </MyMain>
  )
}