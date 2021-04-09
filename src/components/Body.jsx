import styled from "styled-components";

import Search from "./Search";
import Title from "./Title";

const MyDiv = styled.div`
    margin: 0 auto;
    text-align: center;

    border: 2px solid blue;
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
            <Search />
        </MyDiv>
    )
}