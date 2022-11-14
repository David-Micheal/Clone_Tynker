import React from "react";
import styled from "styled-components";
import imag from "../assets/bottom.svg";
import pic from "../assets/for-teachers.webp";

const Educators: React.FC = () => {
  return (
    <Container>
      <First>
        <Wrapper>
          <One>
            <Edu>Educators</Edu>
            <Join>
              Join over 100,000 schools that use Tynker to engage students with
              coding and connect with other educators who love to code!
              <br />
              <br />
              Teaching coding with Tynker is as easy as 1-2-3. In just minutes,
              you can create a free account, set up your virtual classroom, and
              assign ready-made lesson plans!
              <br />
              <br />
              Tynker empowers K-12 educators with free PD, standards-aligned
              curricula, cross-curricular STEM coding, AP Computer Science
              courses, and many great coding resources.
            </Join>
            <More>LEARN MORE</More>
          </One>
          <Two src={pic} />
        </Wrapper>
      </First>
      <Second src={imag} />
    </Container>
  );
};

export default Educators;

const Container = styled.div`
  width: 100%;
  height: 750px;
  background-color: #ebfcff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const First = styled.div`
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
const One = styled.div`
  width: 50%;
  height: 90%;
  /* background-color: darkgray; */
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;
const Edu = styled.div`
  width: 250px;
  height: 60px;
  /* background-color: aqua; */
  display: flex;
  font-size: 45px;
  font-weight: bold;
  align-items: center;
`;
const Join = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: darkolivegreen; */
  display: flex;
  font-size: 21px;
  margin-top: 10px;
`;
const More = styled.div`
  width: 210px;
  height: 70px;
  border: none;
  border-radius: 10px;
  background-color: #ff8d1a;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  color: white;

  :hover {
    background-color: #df7102;
    transition: all 450ms;
    cursor: pointer;
  }
`;

const Two = styled.img`
  width: 40%;
  height: 100%;
  /* background-color: black; */
  object-fit: contain;
  margin-right: 65px;
`;

const Second = styled.img`
  width: 100%;
  height: 150px;
  /* background-color: black; */
  object-fit: cover;
`;
