import styled from "styled-components";
import { useState } from "react"

import Title from "./Title";
import Content from "./Content"
import Search from "./Search";

const MyBody = styled.main`
  padding: 2% 0;
`;

/**
 * 
 * @param {*} props 
 * @returns The central body of the application
 */
export default function Body(props) {
  // Hook for subtitle text
  const [qType, setQType] = useState(true)
  const qText = qType ? "Morning Questions" : "Afternoon Questions"

  return(
    <MyBody >
      <Title 
        onClick={() => setQType(!qType)}
        subtitle={qText}
      />
      <Content>
        {props.showMenu ? <Search /> : null}
      </Content>
    </MyBody>
  )
}