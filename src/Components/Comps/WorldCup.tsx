import React from "react";
import styled from "styled-components";
import imag from "../assets/world.png";
import pic from "../assets/Fifa.png";

const WorldCup: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One src={imag} />
        <Two>
          <First src={pic} />
          <Second>
            Have you caught World Cup fever yet? With matches beginning in
            November, excitement is high all around the world. As part of the
            celebrations, Tynker from BYJU’s has teamed up with FIFA to promote
            kids coding in an all new way.
            <br />
            <br />
            When you play a match in BYJU’S Coding Cup, your team runs on code
            that you write! Can you code a smarter soccer team? You’ll learn a
            lot more by practicing and playing and of course — scoring! Anyone
            of any age or skill level can play for free. This is a perfect way
            for your child to start their love of coding!
          </Second>
          <Third>PLAY NOW</Third>
        </Two>
      </Wrapper>
    </Container>
  );
};

export default WorldCup;

const Container = styled.div`
  width: 100%;
  height: 650px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 95%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const One = styled.img`
  width: 55%;
  height: 90%;
  /* background-color: black; */
  object-fit: fill;
`;
const Two = styled.div`
  width: 43%;
  height: 100%;
  /* background-color: darkturquoise; */
  display: flex;
  flex-direction: column;
`;
const First = styled.img`
  width: 100%;
  height: 155px;
  /* background-color: black; */
  object-fit: fill;
`;
const Second = styled.div`
  width: 100%;
  height: 320px;
  /* background-color: blue; */
  display: flex;
  font-size: 23px;
  margin-top: 25px;
`;
const Third = styled.button`
  width: 160px;
  height: 70px;
  background-color: #ff8d1a;
  border-radius: 15px;
  border: none;
  margin-top: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 650;
  color: white;

  :hover {
    background-color: #df7102;
    transition: all 450ms;
    cursor: pointer;
  }
`;
