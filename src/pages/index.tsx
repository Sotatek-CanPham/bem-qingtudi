import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import Layout from '../components/BaseLayout';

const ListGame = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  padding: 15,
  gap: 15,
});

const BoxGame = styled(Link)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  fontSize: 12,
  color: "#333",
  fontWeight: 700,
  width: "calc((100% / 7) - 13px)",

  span: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block",
    width: "100%",
    paddingTop: 10,
    textAlign: "center",
  }
});

const ImgBox = styled("div")({
  borderRadius: 25,
  img: {
    borderRadius: 25,
    boxShadow: "0px 0px 5px 1px #c5c5c5",
    width: "100%",
  },

  "&:hover": {
    overflow: "hidden",
    img: {
      zIndex: 999,
      transform: "scale(1.15)",
      transition: "all 0.1s",
      borderRadius: 25,
    }
  },

});


const Home: NextPage = () => {
  return (
    <Layout title={"Home"}>
      <Container maxWidth="lg">
        <Box className="box">
          <ListGame>
            <BoxGame href="/about">
              <ImgBox>
                <img src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" />
              </ImgBox>
              <span>Minecraft</span>
            </BoxGame>
            <BoxGame href="/about">
              <ImgBox>
                <img src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" />
              </ImgBox>
              <span>Minecraft</span>
            </BoxGame>
            <BoxGame href="/about">
              <ImgBox>
                <img src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" />
              </ImgBox>
              <span>Minecraft</span>
            </BoxGame>
            <BoxGame href="/about">
              <ImgBox>
                <img src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" />
              </ImgBox>
              <span>Minecraft</span>
            </BoxGame>
            <BoxGame href="/about">
              <ImgBox>
                <img src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" />
              </ImgBox>
              <span>Minecraft</span>
            </BoxGame>
            <BoxGame href="/about">
              <ImgBox>
                <img src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" />
              </ImgBox>
              <span>Minecraft</span>
            </BoxGame>
            <BoxGame href="/about">
              <ImgBox>
                <img src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" />
              </ImgBox>
              <span>Minecraft</span>
            </BoxGame>
            <BoxGame href="/about">
              <ImgBox>
                <img src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg" />
              </ImgBox>
              <span>Minecraft</span>
            </BoxGame>
          </ListGame>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
