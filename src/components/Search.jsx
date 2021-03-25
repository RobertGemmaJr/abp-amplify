import { FaSearch } from "react-icons/fa"
import styled from "styled-components"

import Button from "./Button"

const MyDiv = styled.div`
    columns: 3;
    column-gap: 10px;
    column-rule-width: 3px;
`;

export default function Search() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <MyDiv>
      {alphabet.map((letter) => {
        return (
          <Button 
            key={letter}
            text={letter} 
            type="Keypad"
          />
        )
      })}
      <Button text={<FaSearch fontSize="0.75em"/>} />
    </MyDiv>
    )
}