import * as React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

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
});

const LogoComponent = styled("h1")({
  margin: 0,
  display: "flex",
});

const MenuBox = styled("ul")({
  margin: 0,
  display: "flex",
});

const ItemMenu = styled("li")({
  margin: 0,
  display: "flex",
});

export default function HeaderComponent() {
  return (
    <HeaderBox>
      <ContainerBox maxWidth="lg">
        <LogoComponent>
          <Link href="/">
            <a>
              <img src="/logo.png" alt="" />
            </a>
          </Link>
        </LogoComponent>
        <MenuBox>
          <ItemMenu>
            <Link href="/">
              <a>
                <img src="/logo.png" alt="" />
                HOME
              </a>
            </Link>
          </ItemMenu>
        </MenuBox>
      </ContainerBox>
    </HeaderBox>
  );
}
