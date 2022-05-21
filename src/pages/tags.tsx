import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import Layout from '../components/BaseLayout';

const ListGame = styled("div")({
  overflow: "hidden",
  padding: 15,
});

const BoxGame = styled(Link)({
  display: "flex",
  fontSize: 12,
  color: "#333",
  fontWeight: 700,
  width: "calc((100% / 7) - 0px)",
  float: "left",
  flexDirection: "column",
  padding: 7.5,

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

const BoxAdvertisement = styled("div")({
  float: "left",
  marginTop: 7.5,
  h4: {
    fontSize: 10,
    color: "#a5a5a5",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 0,
    linHeight: "10px",
    display: "block",
  }
});

const ContentBoxAdvertisement = styled("div")({
  width: 320,
  height: 280,
  overflow: "hidden",
  float: "left",
});

const BoxAdvertisementCenter = styled("div")({
  float: "left",
  marginTop: 7.5,
  h4: {
    fontSize: 10,
    color: "#a5a5a5",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 0,
    linHeight: "10px",
    display: "block",
  }
});

const ContentBoxAdvertisementCenter = styled("div")({
  width: "100%",
  maxWidth: 970,
  height: 90,
  overflow: "hidden",
  margin: "auto",
});

const BoxGameTag = styled(Link)({
  display: "flex",
  flexDirection: "row",
  padding: 10,
  width: "calc(100% / 3)",
  float: "left",
  marginBottom: 15,

  h3: {
    fontSize: 14,
    fontWeight: 700,
    color: "#00a6ed",
    margin: 0,
    marginBottom: 15,
  },

  span: {
    fontSize: 12,
    color: "#666",
  },

  "&:hover": {
    background: "#f5f7fa",
  }
})

const ImgBoxTag = styled("div")({
  marginRight: 15,
  width: 80,
  height: 80,

  img: {
    width: "100%",
    height: "100%",
  }
})

const Tags: NextPage = () => {
  return (
    <Layout title={"Tags"}>
      <Container maxWidth="lg">
        <Box className="box">
          <BoxAdvertisementCenter>
            <h4>-Advertisement-</h4>
            <ContentBoxAdvertisementCenter></ContentBoxAdvertisementCenter>
          </BoxAdvertisementCenter>
        </Box>

        <Box className="box"
          sx={{
            mt: 3,
          }}>
          <h3 className="title-box">Games Tag List Games</h3>
          <ListGame>
            <BoxAdvertisement>
              <h4>-Advertisement-</h4>
              <ContentBoxAdvertisement></ContentBoxAdvertisement>
            </BoxAdvertisement>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
            <BoxGameTag href="/about">
              <ImgBoxTag>
                <img src="https://www.qingtudi.com/images/tag/minecraft_80.png" />
              </ImgBoxTag>
              <div>
                <h3>Minecraft Games</h3>
                <span>100 Games</span>
              </div>
            </BoxGameTag>
          </ListGame>
        </Box>

        <Box className="box"
          sx={{
            mt: 3,
          }}>
          <BoxAdvertisementCenter>
            <h4>-Advertisement-</h4>
            <ContentBoxAdvertisementCenter></ContentBoxAdvertisementCenter>
          </BoxAdvertisementCenter>
        </Box>

        <Box className="box"
          sx={{
            mt: 3,
          }}>
          <h3 className="title-box">Hot Game</h3>
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

export default Tags;