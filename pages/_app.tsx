import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

import { UIProvider } from "@/context/ui";
import { EntriesProvider } from "@/context/entries";
import { darkTheme, lightTheme } from "@/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={1 ? darkTheme : lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}
