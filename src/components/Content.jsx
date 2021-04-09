import styled from "styled-components"

const MyDiv = styled.div`
    padding: 2%
`;

export default function Content({children}) {
    return <MyDiv>{children}</MyDiv>
}