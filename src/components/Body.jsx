import styled from "styled-components";

import Search from "./Search";
import Title from "./Title";
import Content from "./Content"

const MyDiv = styled.div`
  padding: 2%;
  text-align: center;
`;

/**
 * 
 * @param {*} props 
 * @returns The central body of the application
 */
export default function Body(props) {
  return(
    <MyDiv>
      <Title />
      <Content>
        <Search />
      </Content>
    </MyDiv>
  )
}