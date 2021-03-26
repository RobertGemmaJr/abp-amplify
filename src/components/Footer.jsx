import styled from "styled-components";

const Copyright = styled.p`
    background-color: yellow;
    text-align: center;
    font-size: 1.2em;
    margin: 0;

    * {
      margin-bottom: 0;
    }
`;

/**
 * 
 * @param {*} props 
 * @returns The application's footer
 */
export default function Footer(props) {
  const year = new Date().getFullYear();

  return(
    <Copyright>Copyright {year} © DisruptWorks Technologies</Copyright>
  );
}