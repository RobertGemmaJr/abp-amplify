import styled from "styled-components"

const MyContent = styled.div`
    padding: 2%;
    flex: 1; // Main flex, push content to footer
`;

export default function Content(props) {
    return <MyContent>{props.children}</MyContent>
}