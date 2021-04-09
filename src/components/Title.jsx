import styled from "styled-components"

import { useState } from "react"

const MyDiv = styled.div`
  text-align: center;
  margin: 0 10%;

  h1 {
    margin-top: 0;
    margin-bottom: 0.5%;
  }

  h3 {
    margin-top: 0;
    color: green;
  }
`;

/**
 * Searches databases for the company title and image.
 * Clicking on title swaps between morning and afternoon questionnaire
 * 
 * @todo Title shouldn't take full width
 * 
 * @param {*} props 
 * @returns Title at the top of the body
 */
export default function Title(props) {
  // Hook for Morning/Afternoon questions
  const [question, setQuestion] = useState(true)
  
  return (
    <MyDiv onClick={() => setQuestion(!question)} >
      <h1>Apple Blossom Preschool</h1>
      <h3>{question ? "Morning": "Afternoon"} Questions</h3>
    </MyDiv>
  )
}