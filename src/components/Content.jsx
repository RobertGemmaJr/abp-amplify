import styled from "styled-components"

/** 
 * @todo Make height stretch such that footer is at bottom of page 
 *      Should be able to do this by stretching bottom padding
*/
const MyDiv = styled.div`
    padding: 2%;
`;

export default function Content(props) {
    return <MyDiv>{props.children}</MyDiv>
}