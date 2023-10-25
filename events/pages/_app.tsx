import { AppProps } from 'next/app';
import Head from 'next/head';
import { Container } from "@mui/material";
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to events!</title>
      </Head>
      <main className="app">
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  );
}

export default CustomApp;
