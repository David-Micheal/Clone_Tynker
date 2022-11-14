import React from "react";
import styled from "styled-components";
import { IoLogoGameControllerB } from "react-icons/io";
import { ImGift } from "react-icons/im";
import Imag from "./assets/Logo1.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One src={Imag} />
        <Two>
          <Play>
            <Game>
              <IoLogoGameControllerB />
            </Game>
            PLAY
          </Play>
          <Parent>PARENTS</Parent>
          <Edu>EDUCATIONS</Edu>
          <Why>WHY CODE?</Why>
          <Gift>
            <Gif>
              <ImGift />
            </Gif>
            GIFT
          </Gift>
        </Two>
        <Three>
          <Button1>START FOR FREE</Button1>
          <Button2>LOG IN</Button2>
        </Three>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #2e7cd1;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const One = styled.img`
  width: 220px;
  height: 35px;
  /* background-color: black; */
  object-fit: fill;
`;
const Two = styled.div`
  width: 750px;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Play = styled.div`
  width: 120px;
  height: 50px;
  /* background-color: cadetblue; */
  font-size: 23px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  :hover {
    /* background-color: #6d6d6d; */
    border-radius: 10px;
    border: 2px solid white;
    transition: all 450ms;
    cursor: pointer;
    fill-opacity: 0.8;
  }
`;
const Game = styled.div`
  height: 100%;
  font-size: 40px;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
const Parent = styled.div`
  width: 120px;
  height: 50px;
  /* background-color: red; */
  font-size: 23px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  :hover {
    /* background-color: #d9e5f0; */
    fill-opacity: 0.8;
    border-radius: 10px;
    border: 2px solid white;
    transition: all 350ms;
    cursor: pointer;
  }
`;
const Edu = styled.div`
  width: 150px;
  height: 50px;
  /* background-color: darkcyan; */
  font-size: 23px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  :hover {
    /* background-color: #d9e5f0; */
    border-radius: 10px;
    border: 2px solid white;
    transition: all 350ms;
    cursor: pointer;
    fill-opacity: 0.8;
  }
`;
const Why = styled.div`
  width: 150px;
  height: 50px;
  /* background-color: darkkhaki; */
  font-size: 23px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  :hover {
    /* background-color: #d9e5f0; */
    border-radius: 10px;
    border: 2px solid white;
    transition: all 350ms;
    cursor: pointer;
    fill-opacity: 0.8;
  }
`;
const Gift = styled.div`
  width: 120px;
  height: 50px;
  /* background-color: cadetblue; */
  font-size: 23px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  :hover {
    /* background-color: #d9e5f0; */
    border-radius: 10px;
    border: 2px solid white;
    transition: all 350ms;
    cursor: pointer;
    fill-opacity: 0.8;
  }
`;
const Gif = styled.div`
  height: 100%;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

const Three = styled.div`
  width: 350px;
  /* background-color: darkgray; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button1 = styled.button`
  height: 60px;
  width: 230px;
  border: 2px solid white;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 600;
  color: white;

  :hover {
    background-color: #76b853;
    transition: all 450ms;
    cursor: pointer;
    border: none;
  }
`;
const Button2 = styled.button`
  height: 60px;
  width: 110px;
  /* background-color: azure; */
  border: none;
  border-radius: 10px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 600;
  color: white;

  :hover {
    background-color: #76b853;
    transition: all 450ms;
    cursor: pointer;
  }
`;
