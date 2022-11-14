import React from "react";
import styled from "styled-components";
import Pic from "../assets/learning-path.webp";

const Explore: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <First>
            The #1 Coding Program for Kids and
            <br />
            Teens
          </First>
          <Second>
            Tynker powers the creativity of over 60 million students and serves
            thousands of schools and educators worldwide.
            <br />
            <br />
            Our interactive story-based learning allows kids and teens to learn
            the basics with easy block-based coding challenges before seamlessly
            transitioning to real-world text-based languages like JavaScript and
            Python.
            <br />
            <br />
            With 70+ award-winning courses, there’s a learning path for every
            student, no matter their age or level. We have over 5,000 lessons,
            backed by hundreds of built-in tutorials, hands-on projects and
            interactive assessments.
          </Second>
          <Third>EXPLORE CURRICULUM</Third>
        </One>
        <Two src={Pic} />
      </Wrapper>
    </Container>
  );
};

export default Explore;

const Container = styled.div`
  width: 100%;
  height: 650px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 90%;
  /* background-color: brown; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const One = styled.div`
  width: 45%;
  height: 100%;
  /* background-color: cadetblue; */
`;
const First = styled.div`
  width: 100%;
  height: 110px;
  /* background-color: darkgoldenrod; */
  display: flex;
  align-items: center;
  font-size: 43px;
  padding: 0px;
  font-weight: bold;
`;
const Second = styled.div`
  width: 100%;
  height: 350px;
  /* background-color: crimson; */
  display: flex;
  font-size: 22px;
  margin-top: 10px;
  text-align: left;
`;
const Third = styled.button`
  width: 290px;
  height: 70px;
  background-color: #ff8d1a;
  border-radius: 15px;
  border: none;
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin-top: 15px;

  :hover {
    background-color: #df7102;
    transition: all 450ms;
    cursor: pointer;
  }
`;

const Two = styled.img`
  width: 49%;
  height: 80%;
  /* background-color: black; */
  object-fit: cover;
`;
