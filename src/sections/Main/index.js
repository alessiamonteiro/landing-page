import styled, { keyframes } from "styled-components";

const move = keyframes`
    0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.div`
  width: 100vw;
  height: 45vw;
  background-color: var(--purple);
  color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;

  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Figure = styled.div`
  width: 100%;
  position: absolute;
  right: 0;

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
    display: none;
  }
`;

const Ninja = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;

  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--white);
`;

const CTA = styled.a`
  padding: 0.5rem 1rem;
  background-color: var(--white);
  color: var(--black);
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:active {
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 1.5rem;
  }

  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  z-index: 7;
  height: auto;
  animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

export default function Hero() {
  return (
    <HomeSection id="home">
      <Figure>
        <Ninja>
          <img
            src="https://image.flaticon.com/icons/png/512/2929/2929724.png"
            alt="Ninja"
            width="400"
            height="400"
          />
        </Ninja>
      </Figure>
      <MainContent>
        <LeftBlock>
          <Topic>
            <Circle /> <span>Começa em 3 dias</span>
          </Topic>
          <Title>Black Friday dos Ninjas</Title>
          <SubText>
            Até 80% de desconto em todos os produtos, isso não é um genjutso!
          </SubText>
          <CTA href="#contact">
            Cadastre seu email &nbsp;
            <img
              src="https://img-premium.flaticon.com/png/512/1812/premium/1812367.png?token=exp=1626650217~hmac=84141db214d9d593ce3a65e5898c7a68"
              alt="PurpleBlob"
              width="400"
              height="400"
            />
          </CTA>
        </LeftBlock>
        <MobileSvg
          src="https://image.flaticon.com/icons/png/512/4193/4193685.png"
          alt="MObile Svg"
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
}
