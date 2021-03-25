import styled from "styled-components";

const Keypad = styled.button`
    display: block;
    width: 50px;
    height: 50px;
    margin: 10px 25px;

    text-align: center;
    font-size: 2em;

    border: none;
    border-radius: 5px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.black};

    :hover {
        background-color: ${props => props.theme.secondary};
        color: ${props => props.theme.white};
    }
`;

// props.text - the text inside the button
// props.type - the type of the button
// TODO: Better error handling for incorrect button type
export default function Button(props) {

    // Determine type of button to render
    switch(props.type) {
        case "Keypad":
            return <Keypad>{props.text}</Keypad>;
        default:
            Error("Invalid button type rendered: " + props.type)
            return null
    }
}