import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import * as React from 'react';
import NavBar from './NavBar';

export interface ILayoutProps {
  // children: AppProps;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};
