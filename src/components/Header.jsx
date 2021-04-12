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
    const { resetClick, menuClick } = props;
    return(
        <MyHeader>
            <h1>Apple Blossom Health Check</h1>
            <div>
                <Button type="Menu" text="RESET" click={resetClick}/>
                <Button type="Menu" text="MENU" click={menuClick}/>
                {/* Temp - don't know if we'll keep thermometer */}
                <Button type="Menu" text="THER." />
            </div>            
        </MyHeader>
    )
}