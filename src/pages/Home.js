import Main from "../sections/Main";
import Contact from "../sections/Contact";
import Products from "../sections/Products";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Main />
      <Products />
      <Contact />
    </Container>
  );
}
