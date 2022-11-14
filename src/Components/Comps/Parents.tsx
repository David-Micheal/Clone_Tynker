import React from "react";
import styled from "styled-components";
import imag from "../assets/squiggle-top.svg";
import pic from "../assets/for-parents.webp";

const Parents: React.FC = () => {
  return (
    <Container>
      <First src={imag} />
      <Second>
        <Wrapper>
          <One src={pic} />
          <Two>
            <Par>Parents</Par>
            <Coding>
              Coding plays a pivotal role in our daily lives from cars and
              coffee makers to life-changing advancements in medicine,
              environmental conservation, space exploration, and much more.
              <br />
              <br />
              At Tynker, we teach kids and teens to code through both our
              self-paced, game-like courses and our teacher-led private online
              classes. With Tynker, there’s a path to coding certification for
              all ages and skill levels that will advance them to real-world
              Python, Web Dev, Data Science and more!
              <br />
              <br />
              Select the option that’s best for your child!
            </Coding>
            <Learn>LEARN MORE</Learn>
          </Two>
        </Wrapper>
      </Second>
    </Container>
  );
};

export default Parents;

const Container = styled.div`
  width: 100%;
  height: 750px;
  background-color: #ebfcff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const First = styled.img`
  width: 100%;
  height: 150px;
  /* background-color: black; */
  object-fit: cover;
`;
const Second = styled.div`
  width: 100%;
  height: 550px;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 95%;
  width: 90%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const One = styled.img`
  width: 40%;
  height: 100%;
  /* background-color: black; */
  object-fit: fill;
  margin-left: 55px;
`;
const Two = styled.div`
  width: 50%;
  height: 90%;
  /* background-color: darkgray; */
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;
const Par = styled.div`
  width: 190px;
  height: 60px;
  /* background-color: aqua; */
  display: flex;
  font-size: 45px;
  font-weight: bold;
  align-items: center;
`;
const Coding = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: darkolivegreen; */
  display: flex;
  font-size: 21px;
  margin-top: 10px;
`;
const Learn = styled.button`
  width: 210px;
  height: 70px;
  border: none;
  border-radius: 10px;
  background-color: #ff8d1a;
  margin-top: 12px;
  font-size: 22px;
  font-weight: 600;
  color: white;

  :hover {
    background-color: #df7102;
    transition: all 450ms;
    cursor: pointer;
  }
`;
