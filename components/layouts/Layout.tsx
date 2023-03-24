import { FC, PropsWithChildren } from "react";

import Head from "next/head";

import { Box } from "@mui/system";
import { Navbar, Sidebar } from "../ui";

interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({
  title = "OpenJira",
  children,
}) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
