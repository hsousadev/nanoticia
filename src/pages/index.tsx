import { createContext } from "react"

import Head from "next/head";

import MainPage from "../modules/MainPage";

interface GlobalContextProps {
  green: string,
  greenIconsSize: number,
}

export const GlobalContext = createContext<GlobalContextProps>({
  green: "#65D2AE",
  greenIconsSize: 40,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>nanoticia</title>
        <meta name="title" content="nanoticia" />
        <link rel="icon" href="/nanoticia-favicon.png" />
      </Head>

      <MainPage />
    </>
  );
}
