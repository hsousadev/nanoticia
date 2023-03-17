import { createContext, useState } from "react";

import Head from "next/head";

import MainPage from "../modules/MainPage";

import { getCurrentDate } from "../shared/utils/getCurrentDate";

interface GlobalContextProps {
  greenIconsSize?: number;
  news: any;
}

export const GlobalContext = createContext<GlobalContextProps>({
  greenIconsSize: 40,
  news: [],
});

export async function getStaticProps() {
  const currentDate = getCurrentDate();

  const response = await fetch(
    `http://api.mediastack.com/v1/news?access_key=c11f1cfa6b15a3404988d05b493fe6d5&sort=published_desc&countries=br&languages=pt&limit=60&date=${currentDate}`
  );

  const data = await response.json();
  const news = data.data;

  for (let i = 0; i < news.length; i++) {
    if (!news[i].image) {
      const response = await fetch(
        `http://api.linkpreview.net/?key=b38036e059258735225c9fc893a5ff77&q=${news[i].url}`
      );
      const newImage = await response.json();

      if (newImage.image) {
        news[i].image = newImage.image;
      }
    }
  }

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
