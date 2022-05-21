import { FC } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import HeadComponent from '../Header';
import FooterComponent from '../Footer';

const MainBox = styled("main")({
  margin: "15px 0",
  minHeight: '100vh',
  display: "flex",
  flexDirection: "column",
});

interface Props {
  title?: string;
  children?: any;
}

const BaseLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <HeadComponent />
      <MainBox>{children}</MainBox>
      <FooterComponent />
    </>
  );
};

export default BaseLayout;
