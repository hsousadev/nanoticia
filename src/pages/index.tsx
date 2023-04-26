import Head from "next/head";
import { createContext } from "react";

import MainPage from "../modules/MainPage";

interface NewsContextProps {
  news: any;
}

export const NewsContext = createContext<NewsContextProps>({
  news: [],
});

export async function getServerSideProps() {
  const getWorldNews = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=world&apikey=1aa478fe04a57ba66875f776b176a1f5&lang=pt&country=br`
  );

  const worldNewsData = await getWorldNews.json();
  const worldNews = worldNewsData.articles;

  const getTechnologyNews = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=technology&apikey=1aa478fe04a57ba66875f776b176a1f5&lang=pt&country=br`
  );

  const technologyNewsData = await getTechnologyNews.json();
  const technologyNews = technologyNewsData.articles;

  const allNews = [...worldNews, ...technologyNews];

  const news = allNews;

  return {
    props: {
      news,
    },
  };
}

export default function Home({ news }: any) {
  return (
    <>
      <Head>
        <title>nanoticia</title>
        <meta name="title" content="nanoticia" />
        <link rel="icon" type="shortcut icon" href="/favicon.svg" />
      </Head>

      <NewsContext.Provider value={{ news }}>
        <MainPage />
      </NewsContext.Provider>
    </>
  );
}
