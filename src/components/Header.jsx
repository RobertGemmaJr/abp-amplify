import styled from "styled-components";
import Button from "./Button"

const MyHeader = styled.header`
    background: ${props => props.theme.white};
    /* display: inline-flex; */
    display: flexbox;

    * {
        padding: 10px;
        margin-top: 0;
    }
`;

/**
 * 
 * @param {*} props 
 * @returns The applications header
 */
export default function Header(props) {
    return(
        <MyHeader>
            <h1>Health Check</h1>
            <Button key="RESET" text="RESET" type="Keypad" />
        </MyHeader>
    )
}