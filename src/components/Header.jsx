import styled from "styled-components";
import SettingsIcon from '@material-ui/icons/Settings';
//<SettingsIcon fontSize="large"/>
import Button from "./Button"

const MyHeader = styled.header`
    background: ${props => props.theme.white};
    display: flex;
    align-items: center;
    align-content: space-between;

    /* h1 {
        margin-left: 10px;
    } */
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
            <Button type="Menu" text="RESET" />
            <Button type="Menu" text="MENU" />
        </MyHeader>
    )
}