import styled from "styled-components";
import Button from "./Button"

const MyHeader = styled.header`
    background: ${props => props.theme.white};
    display: flex;
    align-items: center;
    
    h1 {
        margin-left: 10px;
    }

    div {
        margin-left: auto;
        margin-right: 10px
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
            <div>
                <Button type="Menu" text="RESET" />
                <Button type="Menu" text="MENU" click={props.menuClick}/>
                {/* Temp - don't know if we'll keep thermometer */}
                <Button type="Menu" text="THER." />
            </div>            
        </MyHeader>
    )
}