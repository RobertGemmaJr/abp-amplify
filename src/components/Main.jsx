import styled from "styled-components";
import { useState } from "react"

import Title from "./Title";
import Content from "./Content"
import Search from "./Search";

const MyMain = styled.main`
  padding: 2% 0;
  flex: 1;
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
        subtitle={props.showMenu ? qText : "Menu" }
      />
      <Content>
        {/* Temp - this should be based on the other content pages. */}
        {/* showMenu will just show the menu on top of whatever page is up */}
        {props.showMenu ? <Search /> : null}
      </Content>
    </MyMain>
  )
}