import type {Metadata} from 'next';
import './globals.css';
import {PropsWithChildren} from 'react';
import {BricolageGroteske, Rubik} from '@assets/fonts/fonts';
import Navbar from '@components/navbar/Navbar';
import {css} from '@/styled-system/css';

export const metadata: Metadata = {
  title: 'Timeuh - Portfolio',
  description: 'Personal portfolio of Timeuh',
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang='fr' className={`${Rubik.variable} ${BricolageGroteske.variable}`}>
      <body className={css({fontFamily: 'rubik'})}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
