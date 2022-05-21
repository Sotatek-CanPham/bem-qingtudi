import * as React from "react";
import { Container, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/system";
import Link from "../Link";

const HeaderBox = styled("header")({
  margin: "0 auto",
  width: "100%",
  background: "#612a92",

  a: {
    display: "flex",
  },
});

const ContainerBox = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const LogoComponent = styled("h1")({
  margin: 0,
  display: "flex",
});

const MenuBox = styled("ul")({
  margin: 0,
  display: "flex",
  marginLeft: "auto",
  marginRight: 20,
});

const ItemMenu = styled("li")({
  margin: 0,
  display: "flex",

  a: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "0 15px",
    fontSize: 14,
    height: 53,
    fontWeight: 700,
    color: "#f7f1f1",
    textTransform: "uppercase",

    "& img": {
      width: 20,
      marginRight: 10,
    },

    "&:hover": {
      background: "#2e0850",
    }
  },
});

export default function HeaderComponent() {
  return (
    <HeaderBox>
      <ContainerBox maxWidth="lg">
        <LogoComponent>
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </LogoComponent>
        <MenuBox>
          <ItemMenu>
            <Link href="/">
              <img src="/images/icons/icon_home.png" alt="" />
              Home
            </Link>
          </ItemMenu>
          <ItemMenu>
            <Link href="/best">
              <img src="/images/icons/icon_best.png" alt="" />
              Best
            </Link>
          </ItemMenu>
          <ItemMenu>
            <Link href="/new">
              <img src="/images/icons/icon_new.png" alt="" />
              New
            </Link>
          </ItemMenu>
          <ItemMenu>
            <Link href="/hot">
              <img src="/images/icons/icon_hot.png" alt="" />
              Hot
            </Link>
          </ItemMenu>
          <ItemMenu>
            <Link href="/tags">
              <img src="/images/icons/icon_tags.png" alt="" />
              Tags
            </Link>
          </ItemMenu>
        </MenuBox>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 220 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder=""
            inputProps={{ 'aria-label': '' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </ContainerBox>
    </HeaderBox>
  );
}
