import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Layout from "../components/BaseLayout";
import Link from '../components/Link';

const ContentPageDetail = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const LeftPageDetail = styled("div")({
  background: "#fff",
  width: 150,
  boxShadow: "0 2px 3px 0 rgb(0 0 0 / 15%)",
  marginBottom: 20,
  display: "flex",
  flexDirection: "column",
});

const SubTitle = styled("h2")({
  background: "#612a92",
  borderBottom: "1px solid #e8e8e8",
  height: 30,
  lineHeight: "30px",
  color: "#fff",
  display: "block",
  margin: "5px 2px 5px 9px",
  boxShadow: "0 2px 3px 0 rgb(0 0 0 / 15%)",
  fontSize: 12,
  paddingLeft: 10,
});

const RightPageDetail = styled("div")({
  width: "calc(100% - 150px - 10px)",
});


const ListGameLeft = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const BoxGameLeft = styled(Link)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: 5,

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

const ImgBoxLeft = styled("div")({
  borderRadius: 25,
  display: "flex",
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

const TopRightDetail = styled("div")({
  background: "#fff",
  width: "100%",
  boxShadow: "0 2px 3px 0 rgb(0 0 0 / 15%)",
  marginBottom: 5,
  display: "flex",
  flexWrap: "wrap",
  padding: 15,
  gap: 15,
});

const BoxGameTopRight = styled(Link)({
  width: "calc((100% / 9) - 14px)",
});


const Detail: NextPage = () => {
  return (
    <Layout title={"detail"}>
      <Container maxWidth="xl" style={{ maxWidth: 1398 }}>
        <ContentPageDetail>
          <LeftPageDetail>
            <SubTitle>Rand Games</SubTitle>
            <ListGameLeft>
              <BoxGameLeft href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameLeft>
              <BoxGameLeft href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameLeft>
              <BoxGameLeft href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameLeft>
            </ListGameLeft>
          </LeftPageDetail>
          <RightPageDetail>
            <TopRightDetail>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
              <BoxGameTopRight href="/about">
                <ImgBoxLeft>
                  <img
                    src="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                    alt="https://www.qingtudi.com/images/l/minecraft/minecraft253.jpg"
                  />
                </ImgBoxLeft>
              </BoxGameTopRight>
            </TopRightDetail>

          </RightPageDetail>
        </ContentPageDetail>
      </Container>
    </Layout>
  );
};

export default Detail;
