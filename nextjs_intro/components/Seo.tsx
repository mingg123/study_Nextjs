import { fchmod } from 'fs';
import Head from 'next/head';
import * as React from 'react';

export interface ISeoProps {
  title: string;
}

export const Seo: React.FC<ISeoProps> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};
