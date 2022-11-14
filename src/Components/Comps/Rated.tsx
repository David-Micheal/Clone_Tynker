import React from "react";
import styled from "styled-components";

const Rated: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One>3 Highly-Rated Mobile Apps for Learning Code</One>
        <Two>Download Tynker apps and learn to code on the go.</Two>
        <Three>LEARN MORE</Three>
      </Wrapper>
    </Container>
  );
};

export default Rated;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 60%;
  height: 60%;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const One = styled.div`
  width: 100%;
  height: 60px;
  /* background-color: cadetblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: bold;
`;
const Two = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: darkorange; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
const Three = styled.button`
  width: 200px;
  height: 70px;
  background-color: #ff8d1a;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 650;
  color: white;
  margin-top: 10px;

  :hover {
    background-color: #df7102;
    transition: all 450ms;
    cursor: pointer;
  }
`;
