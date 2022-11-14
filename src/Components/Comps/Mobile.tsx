import React from "react";
import styled from "styled-components";
import imag from "../assets/graphic-mobile.webp";
import pic1 from "../assets/icon-junior.webp";
import pic2 from "../assets/icon-app.webp";
import pic3 from "../assets/icon-mod.webp";
import star from "../assets/star-rm-bg.png";

const Mobile: React.FC = () => {
  return (
    <Container>
      <One src={imag} />
      <Two>
        <First>
          <Junior src={pic1} />
          <Tm>
            <Th>Tynker Junior</Th>
            <Fm>
              Tap-Tap picture coding with voice-overs. Pre-readers solve
              story-based puzzles and build their first programs in coding
              sandboxes. Ages 5-7
            </Fm>
            <Gh>
              <Star src={star} />
              <Review>4.5 - 2,200+reviews</Review>
            </Gh>
          </Tm>
        </First>
        <Second>
          <App src={pic2} />
          <Drag>
            <Block>Tynker</Block>
            <Compose>
              Drag-and-drop block coding with a full-featured workshop. Build
              games and apps, compose music and art, control smart devices, and
              much, much more. Ages 7-12
            </Compose>
            <In>
              <Much src={star} />
              <Rate>4.7 - 10,400+reviews</Rate>
            </In>
          </Drag>
        </Second>
        <Third>
          <Mod src={pic3} />
          <Mine>
            <Item>Mod Creator</Item>
            <Mob>
              Drag-and-drop Minecraft modding. Design skins, blocks and items.
              Modify mob behaviors. Create mods and add ons. Explore worlds!
              Ages 7-12
            </Mob>
            <Skin>
              <The1 src={star} />
              <The2>4.0 - 3,300+reviews</The2>
            </Skin>
          </Mine>
        </Third>
      </Two>
    </Container>
  );
};

export default Mobile;

const Container = styled.div`
  width: 100%;
  height: 770px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const One = styled.img`
  width: 50%;
  height: 80%;
  /* background-color: black; */
  object-position: center;
  object-fit: cover;
`;
const Two = styled.div`
  width: 45%;
  height: 98%;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// -------------------- First Div ---------------------
const First = styled.div`
  width: 100%;
  height: 205px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
`;
const Junior = styled.img`
  height: 80px;
  width: 80px;
  /* background-color: black; */
  object-position: center;
  object-fit: contain;
`;
const Tm = styled.div`
  width: 670px;
  height: 100%;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
`;
const Th = styled.div`
  width: 190px;
  height: 37px;
  /* background-color: crimson; */
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: black;
  cursor: pointer;
`;
const Fm = styled.div`
  width: 90%;
  height: 120px;
  /* background-color: royalblue; */
  font-size: 28px;
`;
const Gh = styled.div`
  width: 500px;
  height: 30px;
  /* background-color: red; */
  margin-top: 6px;
  display: flex;
  align-items: center;
`;
const Star = styled.img`
  width: 150px;
  height: 100%;
  /* background-color: black; */
  object-position: center;
  object-fit: cover;
`;
const Review = styled.div`
  font-size: 20px;
  margin-left: 80px;
`;

// ------------------ Second Div --------------------------

const Second = styled.div`
  width: 100%;
  height: 240px;
  /* background-color: darkorchid; */
  display: flex;
  justify-content: space-between;
`;
const App = styled.img`
  height: 80px;
  width: 80px;
  /* background-color: black; */
  object-position: center;
  object-fit: contain;
`;
const Drag = styled.div`
  width: 670px;
  height: 100%;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
`;
const Block = styled.div`
  width: 100px;
  height: 37px;
  /* background-color: crimson; */
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: black;
  cursor: pointer;
`;
const Compose = styled.div`
  width: 90%;
  height: 150px;
  /* background-color: royalblue; */
  font-size: 28px;
`;
const In = styled.div`
  width: 500px;
  height: 30px;
  /* background-color: red; */
  margin-top: 7px;
  display: flex;
  align-items: center;
`;
const Much = styled.img`
  width: 150px;
  height: 100%;
  /* background-color: black; */
  object-position: center;
  object-fit: cover;
`;
const Rate = styled.div`
  font-size: 20px;
  margin-left: 80px;
`;

// ------------------ Third Div ---------------------------
const Third = styled.div`
  width: 100%;
  height: 230px;
  /* background-color: gold; */
  display: flex;
  justify-content: space-between;
`;
const Mod = styled.img`
  height: 80px;
  width: 80px;
  /* background-color: black; */
  object-position: center;
  object-fit: contain;
`;
const Mine = styled.div`
  width: 670px;
  height: 100%;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  width: 170px;
  height: 37px;
  /* background-color: crimson; */
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  color: black;
  cursor: pointer;
`;
const Mob = styled.div`
  width: 90%;
  height: 145px;
  /* background-color: royalblue; */
  font-size: 28px;
`;
const Skin = styled.div`
  width: 500px;
  height: 30px;
  /* background-color: red; */
  margin-top: 7px;
  display: flex;
  align-items: center;
`;
const The1 = styled.img`
  width: 150px;
  height: 100%;
  /* background-color: black; */
  object-position: center;
  object-fit: cover;
`;
const The2 = styled.div`
  font-size: 20px;
  margin-left: 80px;
`;
