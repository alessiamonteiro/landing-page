import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;

  svg {
    width: 100%;
    height: auto;
  }

  @media only Screen and (max-width: 48em) {
    width: 80%;
    margin: auto;
  }
`;

export default function ({ url }) {
  return (
    <Container id="product">
      <img src={url} alt="Services" />
    </Container>
  );
}
