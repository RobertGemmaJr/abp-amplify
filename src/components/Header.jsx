import styled from "styled-components";

const MyHeader = styled.header`
    * {
        margin-top: 0;
    }
`;


export default function Header(props) {
    return(
        <MyHeader>
            <h1>Hello, World!</h1>
        </MyHeader>
    )
}