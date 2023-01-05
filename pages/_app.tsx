import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import "cal-sans";

import theme from "../src/theme";
import Layout from "@/components/layout";
import CmdPalette from "@/components/cmd-palette";
import CmdPaletteProvider from "src/providers/cmd-palette-provider";

import "../style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Zi Chao Zhang"
        description="Full-stack software engineer and student at McGill University"
      />
      <CmdPaletteProvider>
        <Layout>
          <CmdPalette />
          <Component {...pageProps} />
        </Layout>
      </CmdPaletteProvider>
    </ChakraProvider>
  );
};

export default App;
