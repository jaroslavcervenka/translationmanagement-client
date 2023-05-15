import React, { FC, PropsWithChildren } from 'react';

import { Inter } from 'next/font/google';

import Providers from '@/application/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  console.log('Layout');

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
