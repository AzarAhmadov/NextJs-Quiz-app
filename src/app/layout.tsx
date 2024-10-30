import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { Rubik } from "next/font/google";
import { Box, Container } from "@chakra-ui/react";
import Heading from "@/components/common/Heading";
import Providers from "@/components/Providers";
import StoreProvider from "./StoreProvider";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiz App ",
  description:
    "Join the frontend revolution! Test your skills and deepen your understanding of web technologies with our engaging quiz app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={rubik.className} suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </head>
      <body>
        <Provider>
          <Container paddingX={{ base: "1.5rem", md: "4rem" }} paddingBottom="1rem">
            <Heading />
            <Providers>
              <StoreProvider>
                <Box className="center">{children}</Box>
              </StoreProvider>
            </Providers>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
