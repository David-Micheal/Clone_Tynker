import React from "react";
import styled from "styled-components";
import imag from "../assets/squiggle-top.svg";

const Facts: React.FC = () => {
  return (
    <Container>
      <First src={imag} />
      <Second>
        <One>
          Why Should Kids and Teens Learn to Code with
          <br />
          Tynker?
        </One>
        <Two>
          Because technology is so integrated into virtually every aspect of our
          lives, learning about it is more important than ever. Our coding
          platform makes it convenient and fun for kids and teens to gain
          knowledge that will serve them well throughout their lives. You can
          count on our trusted methods to help them develop and grow their
          capabilities with computers.
          <br />
          <br />
          Tynker isn’t just for schools and coding camps, though. Parents who
          value STEM education and want their children to know how to code
          should know that our kids programming platform can be used at home,
          too. Tynker offers a range of solutions with icon-coding for
          pre-readers, block-based coding, and advanced courses in Python,
          JavaScript, data science, art, and image processing. There are
          individual and family home plans, and our online coding classes for
          all ages are an excellent way for them to gain the supplemental STEM
          skills needed for their future.
        </Two>
      </Second>
    </Container>
  );
};

export default Facts;

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: #ecfbfe;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const First = styled.img`
  width: 100%;
  height: 150px;
  /* background-color: black; */
  object-fit: cover;
`;
const Second = styled.div`
  width: 60%;
  height: 530px;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const One = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: blue; */
  text-align: center;
  font-size: 46px;
  font-weight: bold;
`;
const Two = styled.div`
  width: 100%;
  height: 340px;
  /* background-color: darkblue; */
  font-size: 22px;
`;
