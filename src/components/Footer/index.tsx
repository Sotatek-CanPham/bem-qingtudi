import * as React from "react";
import { Container, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/system";
import Link from "next/link";

const FooterBox = styled("footer")({
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

export default function FooterComponent() {
  return (
    <FooterBox>
      <ContainerBox maxWidth="lg">
        Footer
      </ContainerBox>
    </FooterBox>
  );
}
