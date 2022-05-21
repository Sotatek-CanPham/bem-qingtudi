import * as React from "react";
import { Container, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/system";
import Link from "next/link";

const BannerFixBox = styled("div")({
  margin: "0 auto",
  width: "100%",
  background: "#612a92",
});

export default function BannerFixedComponent() {
  return (
    <BannerFixBox>
      aaaaaaaaaaaa
    </BannerFixBox>
  );
}
