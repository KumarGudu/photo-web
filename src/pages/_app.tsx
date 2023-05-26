import '../styles/globals.css'
import "../styles/nprogress.css";
import type { AppProps } from "next/app";
import nProgress from "nprogress";
import { Router } from "next/router";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
