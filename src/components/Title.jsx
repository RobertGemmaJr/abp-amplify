// import styled from "styled-components"

import { useState } from "react"

export default function Title(props) {
  // Hook for Morning/Afternoon questions
  const [question, setQuestion] = useState(true)
  return (
    <div onClick={() => setQuestion(!question)} >
      <h1>Company Name</h1>
      <h3>{question ? "Morning": "Afternoon"} Questions</h3>
    </div>
  )
}