import styled from "styled-components"

import Subtitle from "./Subtitle"

const MyTitle = styled.div`
  text-align: center;

  h1 {
    margin-top: 0;
    margin-bottom: 0.5%;
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
  return (
    <MyTitle onClick={props.onClick}>
      <h1>Apple Blossom Preschool</h1>
      <Subtitle text={props.subtitle} />
    </MyTitle>
  )
}