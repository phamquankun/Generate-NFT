import { Web3ReactProvider } from "@web3-react/core";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Web3 from "web3";
import { Provider } from "react-redux";
import LayoutLanding from "../components/layout";
import "../styles/app.scss";
import { store } from "../redux/store";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  function getLibrary(provider: any) {
    return new Web3(provider);
  }
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Head>
          <title>Sparkminds NFT</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LayoutLanding>
          <Component {...pageProps} />
        </LayoutLanding>
      </Web3ReactProvider>
    </Provider>
  );
}

export default MyApp;
