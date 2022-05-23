import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import styled from '@emotion/styled';
import Link from '../components/Link';
import Layout from '../components/BaseLayout';
import { getGamesHome } from '../api/games';

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

  "@media (max-width: 1199px)": {
    width: 147,
  },

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
    height: 147,
    display: "flex",
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
  const [gamesHome, setGameHome] = React.useState<any>([])
  const [currPaginated, setCurrPaginated] = React.useState<number>(20);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  React.useEffect(() => {
    onGetGamesHome(currPaginated)
  }, [currPaginated])

  const onGetGamesHome = async (page: number) => {
    const res = await getGamesHome({page: page});
    setGameHome(res?.data?.crawlers || [])
    setTotalPages(res?.data?.pages || 0)
    console.log("res", res?.data?.crawlers)
  }

  return (
    <Layout title={"Home"}>
      <Container maxWidth="lg">
        <Box className="box">
          <ListGame>
            {
              gamesHome?.map((item: any, index: number) => {
                return (
                  <BoxGame href="/detail" key={index}>
                    <ImgBox>
                      <img src={item.images} alt={item.images} />
                    </ImgBox>

                    <Tooltip title={item.title} placement="top" arrow>
                      <span>{item.title}</span>
                    </Tooltip>
                  </BoxGame>
                )
              })
            }
          </ListGame>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
