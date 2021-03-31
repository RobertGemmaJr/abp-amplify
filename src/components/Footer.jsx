import styled from "styled-components";

const Copyright = styled.p`
  font-size: 1.2em;
`;

const MyFooter = styled.footer`
  background-color: ${props => props.theme.secondary};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
`;

/**
 * 
 * @param {*} props 
 * @returns The application's footer
 */
export default function Footer(props) {
  const year = new Date().getFullYear();

  return(
    <MyFooter>
      <Copyright>Copyright {year} © DisruptWorks Technologies</Copyright>
    </MyFooter>
  );
}