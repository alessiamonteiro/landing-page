import styled from "styled-components";
import { useState } from "react";

export default function Header() {
  const Headers = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background-color: var(--nav);
    color: var(--white);
    position: relative;
    z-index: 500;
    @media only Screen and (max-width: 64em) {
      padding: 0.5rem 3rem;
    }
    @media only Screen and (max-width: 40em) {
      padding: 0.5rem 1.5rem;
    }
  `;

  const Logo = styled.a`
    display: flex;
    align-items: center;
    width: 2rem;
    height: auto;
    cursor: pointer;

    img {
      margin-right: 0.5rem;
    }
  `;

  const Nav = styled.nav`
    width: 25rem;
    max-width: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    @media only Screen and (max-width: 48em) {
      display: none;
    }
    a {
      font-weight: 600;
      line-height: 1.5;
      color: var(--white);
      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 0;
        background: transparent;
        transition: width 0.5s;
      }
      &:not(:last-child):hover::after {
        width: 100%;
        background: var(--purple);
      }
    }
  `;

  const Button = styled.button`
    background-color: var(--purple);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: var(--white);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    &:focus {
      transform: scale(0.9);
    }
    @media only Screen and (max-width: 40em) {
      font-size: 1.2rem;
      &:hover {
        transform: none;
      }
      &:focus {
        transform: none;
      }
    }
  `;

  const HamburguerBtn = styled.button`
    display: none;
    @media only Screen and (max-width: 48em) {
      display: inline-block;
    }
    position: relative;
    background-color: transparent;
    width: 2rem;
    height: 2px;
    margin-top: 0rem;
    transition: all 0.3s;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      background-color: var(--white);
      width: 2rem;
      height: 2px;
      display: inline-block;
      position: absolute;
      left: 0;
      cursor: pointer;
      transition: all 0.3s;
    }
    &::before {
      top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
      top: ${(props) => (props.clicked ? "0" : "0.5rem")};
      transform: ${(props) =>
        props.clicked ? "rotate(-135deg)" : "rotate(0)"};
    }
  `;

  const MobileMenu = styled.div`
    display: none;
    @media only Screen and (max-width: 48em) {
      display: flex;
    }
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    opacity: ${(props) => (props.clicked ? "1" : 0)};
    visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
    transition: all 0.5s;
    z-index: -10;
    background-color: rgb(53 53 63 / 95%);
    border-radius: 20px;
    margin: 0.5rem;
    a {
      color: var(--white);
      font-weight: 600;
      font-size: 1.5rem;
      margin: 1.5rem;
      cursor: pointer;
    }
  `;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Headers>
      <Logo>
        <img
          src="https://image.flaticon.com/icons/png/512/1121/1121034.png"
          alt="NinjaStore Logo"
        />
        <h3>NinjaStore</h3>
      </Logo>
      <Nav>
        <a href="#home">Loja</a>
        <a href="#services">Produtos</a>
        <a href="#contact">
          <Button>Receba Novidades</Button>
        </a>
      </Nav>
      <HamburguerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HamburguerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={() => handleClick()}>
          Loja
        </a>
        <a href="#services" onClick={() => handleClick()}>
          Produtos
        </a>
        <a href="#contact" onClick={() => handleClick()}>
          <Button>Receba Novidades</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
}
