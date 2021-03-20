import styled from "styled-components";

const Copyright = styled.p`
    text-align: center;
    font-size: 1.2em;
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return(
    <Copyright>Copyright {year} © DisruptWorks Technologies</Copyright>
  );
}