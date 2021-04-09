import styled from "styled-components";
import { useState } from "react"

import Title from "./Title";
import Content from "./Content"
import Search from "./Search";

const MyBody = styled.div`
  padding: 2% 0;
  text-align: center;
`;

/**
 * 
 * @param {*} props 
 * @returns The central body of the application
 */
export default function Body(props) {
  const [question, setQuestion] = useState(true)
  const txt = question ? "Morning ": "Afternoon "

  return(
    <MyBody >
      <Title 
        onClick={() => setQuestion(!question)}
        subtitle={txt + "Questions"}
      />
      <Content>
        <Search />
      </Content>
    </MyBody>
  )
}