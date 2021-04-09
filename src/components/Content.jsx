import styled from "styled-components"

const MyDiv = styled.div`
`;

export default function Content({children}) {
    return <MyDiv>{children}</MyDiv>
}