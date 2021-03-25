import styled from "styled-components";

const Keypad = styled.button`
    width: 50px; // 10%
    height: 50px;
    margin: 10px 25px;

    text-align: center;
    font-size: 2em;

    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.primary};

    :hover {
        background-color: ${props => props.theme.secondary};
        color: white;
    }
`;

// props.text - the text inside the button
// props.type - the type of the button
export default function Button(props) {
    return (
        <Keypad>{props.text}</Keypad>
    )
}