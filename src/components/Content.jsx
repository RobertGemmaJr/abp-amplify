import styled from "styled-components"

/** 
 * @todo Make height stretch such that footer is at bottom of page 
 *      Should be able to do this by stretching bottom padding
*/
const MyContent = styled.div`
    flex: 1; // main flex, push content to footer
    padding: 2%;
`;

export default function Content(props) {
    return <MyContent>{props.children}</MyContent>
}