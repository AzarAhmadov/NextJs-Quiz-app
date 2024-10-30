import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { Rubik } from "next/font/google";
import { Container } from "@chakra-ui/react";
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
      <body>
        <Provider>
          <Container paddingX="4rem">
            <Heading />
            <Providers>
              <StoreProvider>{children}</StoreProvider>
            </Providers>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
