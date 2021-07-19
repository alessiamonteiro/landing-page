import { useState } from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }

  @media only Screen and (max-width: 48em) {
    margin: auto 50% 3rem;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function saveEmail(e) {
    e.preventDefault();

    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      localStorage.setItem("nome", name);
      localStorage.setItem("email", email);
      alert("Email salvo com sucesso!");
      setName("");
      setEmail("");
      return;
    }

    alert("Email incorreto, por favor digite um email válido");
  }

  return (
    <ContactSection id="contact">
      <Title>Fique por dentro das promoções</Title>
      <Icons>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img
            style={{ filter: "invert(100%)" }}
            src="https://image.flaticon.com/icons/png/512/1051/1051309.png"
            alt="Facebook"
          />
        </a>
        <a
          href="https://br.linkedin.com/in/alessia-monteiro"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ filter: "invert(100%)" }}
            src="https://image.flaticon.com/icons/png/512/121/121509.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/alessiamonteiro"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ filter: "invert(100%)" }}
            src="https://image.flaticon.com/icons/png/512/38/38401.png"
            alt="Github"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img
            style={{ filter: "invert(100%)" }}
            src="https://image.flaticon.com/icons/png/512/1419/1419647.png"
            alt="Instagram"
          />
        </a>
      </Icons>
      <Form>
        <Row>
          <input
            name="name"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Row>
        <div style={{ margin: "0 auto" }}>
          <button
            style={{ backgroundColor: "var(--purple)", color: "var(--white)" }}
            onClick={(e) => saveEmail(e)}
          >
            Enviar
          </button>
        </div>
      </Form>
    </ContactSection>
  );
}
