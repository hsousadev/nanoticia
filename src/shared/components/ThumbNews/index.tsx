import React from 'react';
import Image from 'next/image'

import { Container } from './styles';

interface ThumbNewsProps {
  category: string;
  description: string;
  source: string;
  style: string;
  image: string;
  publishedAt: number;
  title: string;
  url: string;
}

const ThumbNews= ({ category, description, source, style, image, publishedAt, title, url }: ThumbNewsProps) => {
  return <Container style={style}>
    <Image src={image} alt="fill"/>
    <div className="info">
      <h4>{source}</h4>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{publishedAt}</p>
      <p>{category}</p>
    </div>
  </Container>;
}

export default ThumbNews;