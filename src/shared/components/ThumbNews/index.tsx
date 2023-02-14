import React from 'react';
import Image, { StaticImageData } from 'next/image'

import { Container } from './styles';

interface ThumbNewsProps {
  category?: string;
  description: string;
  source: string;
  style?: any;
  image: StaticImageData;
  publishedAt: string;
  title: string;
  url: string;
}

const ThumbNews= ({ category, description, source, style, image, publishedAt, title, url }: ThumbNewsProps) => {
  return <Container style={style}>
    <Image src={image} width={640} height={400} alt="fill"/>
    <div className="info">
      <h4>{source}</h4>
      <h2>{title}</h2>
      <p className='description'>{description}</p>
      <p className='publishedAt' >{publishedAt}</p>
      <p>{category}</p>
    </div>
  </Container>;
}

export default ThumbNews;