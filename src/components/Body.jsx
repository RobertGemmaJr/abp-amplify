
import styled from "styled-components";
import Search from "./Search";

const MyDiv = styled.div`
    text-align: center;
`;

export default function Body(props) {
    const isMorning = true;
    const time =  (isMorning) ? "Morning" : "Afternoon";
    return(
        <MyDiv>
            <h1>Company Name</h1>
            <h3>{time} Questions</h3>
            <Search />
        </MyDiv>
    )
}