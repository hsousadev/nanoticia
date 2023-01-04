import React from 'react';
import Image from 'next/image'

import { Container } from './styles';

interface ThumbNewsProps {
  category: string;
  description: string;
  source: string;
  style: string;
  thumbnail: string;
  time: number;
  title: string;
}

const ThumbNews= ({ category, description, source, style, thumbnail, time, title }: ThumbNewsProps) => {
  return <Container style={style}>
    <Image src={thumbnail} alt="fill"/>
    <div className="info">
      <h4>{source}</h4>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{time}</p>
      <p>{category}</p>
    </div>
  </Container>;
}

export default ThumbNews;