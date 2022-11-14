import React from "react";
import styled from "styled-components";
import imag from "../assets/homepage-backdrop.png";
import pics from "../assets/hero2.png";
import pic from "../assets/swoosh.svg";

const HeroComp: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <Th1>
            Coding For Kids and
            <br />
            Teens Made Easy
          </Th1>
          <Th2>
            The fun way to learn programming and develop
            <br />
            problem-solving & critical thinking skills!
          </Th2>
          <Th3>GET STARTED FOR FREE</Th3>
        </One>
        <Two src={pics} />
      </Wrapper>
      <Ano></Ano>
      <Down src={pic} />
    </Container>
  );
};

export default HeroComp;

const Container = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${imag});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: aqua; */
`;
const One = styled.div`
  width: 35%;
  height: 50%;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 60px;
`;
const Th1 = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: aqua; */
  display: flex;
  font-size: 60px;
  font-weight: bold;
  color: white;
`;
const Th2 = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: brown; */
  display: flex;
  font-size: 23px;
  color: white;
`;
const Th3 = styled.button`
  width: 330px;
  height: 70px;
  background-color: #ff8d1a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 700;
  color: white;
  border: none;

  :hover {
    background-color: #df7102;
    transition: all 450ms;
    cursor: pointer;
  }
`;

const Two = styled.img`
  width: 60%;
  height: 95%;
  /* background-color: black; */
  object-fit: fill;
  margin-right: 80px;
  margin-top: 30px;
`;

const Down = styled.img`
  width: 100%;
  height: 100px;
  /* background-color: black; */
  object-fit: fill;
  position: absolute;
  top: 650px;
  z-index: 2;
`;
const Ano = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: absolute;
  top: 750px;
`;
