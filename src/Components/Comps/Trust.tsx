import React from "react";
import styled from "styled-components";
import imag from "../assets/Tynker-Logos.png";

const Trust: React.FC = () => {
  return (
    <Container>
      <First>
        <One>Trusted by Leading Brands</One>
        <Two>
          Our methods for learning to code all are provided within a safe,
          moderated community that is built
          <br />
          around encouraging students to gain confidence in their abilities and
          do so without fear of failure.
        </Two>
      </First>
      <Second src={imag} />
    </Container>
  );
};

export default Trust;

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: #eefbfe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const First = styled.div`
  width: 60%;
  height: 160px;
  /* background-color: cornflowerblue; */
  margin-top: 60px;
`;
const One = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: blue; */
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Two = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: burlywood; */
  text-align: center;
  font-size: 23px;
`;
const Second = styled.img`
  width: 80%;
  height: 320px;
  /* background-color: black; */
  object-fit: fill;
`;
