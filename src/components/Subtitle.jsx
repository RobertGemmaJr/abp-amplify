import styled from "styled-components"

const H3 = styled.h3`
    margin: 0;
    color: green;
`;

export default function Subtitle(props) {
    return <H3>{props.text}</H3>
}