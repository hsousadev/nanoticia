import { createContext } from "react";

import Head from "next/head";

import MainPage from "../modules/MainPage";

interface GlobalContextProps {
  green?: string;
  greenIconsSize?: number;
  news: any;
}

export const GlobalContext = createContext<GlobalContextProps>({
  green: "#65D2AE",
  greenIconsSize: 40,
  news: [],
});

export async function getStaticProps() {
  const res = await fetch(
    "http://api.mediastack.com/v1/news?access_key=c11f1cfa6b15a3404988d05b493fe6d5"
  );

  const data = await res.json();
  const news = data;

  return {
    props: {
      news,
    },

    revalidate: 5 * 60,
  };
}

export default function Home({ news }: any) {
  console.log("news", news);

  return (
    <>
      <Head>
        <title>nanoticia</title>
        <meta name="title" content="nanoticia" />
        <link rel="icon" href="/nanoticia-favicon.png" />
      </Head>

      <GlobalContext.Provider value={{ news }}>
        <MainPage />
      </GlobalContext.Provider>
    </>
  );
}