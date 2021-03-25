import { FaSearch } from "react-icons/fa"

import Button from "./Button"


export default function Search() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <div>
      {alphabet.map((letter) => {
        return (
          <Button text={letter} 
          />
        )
      })}
      <Button text={<FaSearch fontSize="0.75em"/>} />
    </div>
    )
}