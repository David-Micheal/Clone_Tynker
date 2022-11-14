import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const Benefits: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <Holder1>
            <Title>CODING BENEFITS</Title>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Top 10 Reasons to Code
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Kids Coding Basics
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Develop 21st Century Skills
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Download eBook on Coding
            </Box>
          </Holder1>
        </One>
        <Two>
          <Holder1>
            <Title>CODING GUIDES</Title>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              What is Coding for Kids
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Coding with Minecraft
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Coding with Electronic Kits
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Coding with Connected Toys
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              More Coding Resources
            </Box>
          </Holder1>
        </Two>
        <Three>
          <Holder1>
            <Title>TYNKER HIGHLIGHTS</Title>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              What's New in Tynker?
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              COVID-19 Impact Report
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Meet our Featured Makers
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Seasonal Coding Projects
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Celebrating Women in STEM
            </Box>
          </Holder1>
        </Three>
        <Four>
          <Holder1>
            <Title>CODING IN SCHOOLS</Title>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              K-12 School Plans
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              AP Computer Science Principles
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              AP Computer Science A
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              Remote Learning
            </Box>
            <Box>
              <Th>
                <BiChevronRight />
              </Th>
              K-12 Success Stories
            </Box>
          </Holder1>
        </Four>
      </Wrapper>
    </Container>
  );
};

export default Benefits;

const Container = styled.div`
  height: 450px;
  width: 100%;
  background-color: #ecfbfe;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 93%;
  height: 85%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;
`;
const One = styled.div`
  width: 400px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
`;
const Holder1 = styled.div`
  height: 70%;
  width: 90%;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: darkcyan;
  margin-bottom: 13px;
`;
const Box = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: darkgray;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Th = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
`;
const Two = styled.div`
  width: 400px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
`;
const Three = styled.div`
  width: 400px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
`;
const Four = styled.div`
  width: 400px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
`;
