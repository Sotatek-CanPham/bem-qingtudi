import * as React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Link from "../Link";

const FooterBox = styled("footer")({
  margin: "0 auto",
  width: "100%",
  background: "#612a92",
  padding: "10px 0",

  a: {
    display: "flex",
  },
});

const LogoComponent = styled("h1")({
  margin: 0,
  display: "flex",
});

const ContainerBox = styled(Container)({
  display: "flex",
  alignItems: "center",
});

const RightFooter = styled("div")({
  margin: 0,
  display: "flex",
  flexDirection: "column",
  marginLeft: 20,
});

const MenuBox = styled("ul")({
  margin: 0,
  display: "flex",
  paddingLeft: 0,
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
    color: "#f7f1f1",

    "& img": {
      width: 20,
      marginRight: 10,
    },
  },
});

const CopyRighht = styled("div")({
  color: "#999",
  fontSize: 12,
  paddingLeft: 15,
});

export default function FooterComponent() {
  return (
    <FooterBox>
      <ContainerBox maxWidth="lg">
        <LogoComponent>
          <Link href="/">
            <img src="/logo_footer.png" alt="" />
          </Link>
        </LogoComponent>
        <RightFooter>
          <MenuBox>
            <ItemMenu>
              <Link href="/">Android Games</Link>
            </ItemMenu>
            <ItemMenu>
              <Link href="/">iPhone / iPad Games</Link>
            </ItemMenu>
            <ItemMenu>
              <Link href="/">Privacy Policy</Link>
            </ItemMenu>
            <ItemMenu>
              <Link href="/">About</Link>
            </ItemMenu>
          </MenuBox>
          <CopyRighht className="copyright">
            Copyright © 2011-2020 QingTuDi.com, All rights reserved.
          </CopyRighht>
        </RightFooter>
      </ContainerBox>
    </FooterBox>
  );
}
