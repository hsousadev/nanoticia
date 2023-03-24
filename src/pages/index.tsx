import Head from "next/head";
import { createContext, useState } from "react";

import MainPage from "../modules/MainPage";

interface GlobalContextProps {
  greenIconsSize?: number;
  news: any;
}

export const GlobalContext = createContext<GlobalContextProps>({
  greenIconsSize: 40,
  news: [],
});

export async function getStaticProps() {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function shuffleArrays(array: Array<any>) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const getGeneralNews = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=general&apikey=1aa478fe04a57ba66875f776b176a1f5&lang=pt&country=br`
  );

  const generalNewsData = await getGeneralNews.json();
  const generalNews = generalNewsData.articles;

  const getSportsNews = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=sports&apikey=1aa478fe04a57ba66875f776b176a1f5&lang=pt&country=br`
  );

  const sportNewsData = await getSportsNews.json();
  const sportNews = sportNewsData.articles;

  const getWorldNews = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=world&apikey=1aa478fe04a57ba66875f776b176a1f5&lang=pt&country=br`
  );

  const worldNewsData = await getWorldNews.json();
  const worldNews = worldNewsData.articles;

  await sleep(2000);

  const getTechnologyNews = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=technology&apikey=1aa478fe04a57ba66875f776b176a1f5&lang=pt&country=br`
  );

  const technologyNewsData = await getTechnologyNews.json();
  const technologyNews = technologyNewsData.articles;

  const allNews = [
    ...generalNews,
    ...sportNews,
    ...worldNews,
    ...technologyNews,
  ];

  const news = shuffleArrays(allNews);

  return {
    props: {
      news,
    },
    revalidate: 2 * 3600,
  };
}

export default function Home({ news }: any) {
  return (
    <>
      <Head>
        <title>nanoticia</title>
        <meta name="title" content="nanoticia" />
        <link rel="icon" type="shortcut icon" href="/favicon.svg" />
        <meta http-equiv="cache-control" content="no-cache"></meta>
        <meta http-equiv="expires" content="0"></meta>
        <meta http-equiv="pragma" content="no-cache"></meta>
      </Head>

      <GlobalContext.Provider value={{ news }}>
        <MainPage />
      </GlobalContext.Provider>
    </>
  );
}
