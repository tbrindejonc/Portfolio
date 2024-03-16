import type {Metadata} from 'next';
import './globals.css';
import {PropsWithChildren} from 'react';
import {BricolageGroteske, Rubik} from '@assets/fonts/fonts';
import Navbar from '@components/navbar/Navbar';
import {css} from '@/styled-system/css';
import LanguageProvider from '@providers/LanguageProvider';
import Footer from '@components/Footer';
import QueryProvider from '@providers/QueryProvider';

export const metadata: Metadata = {
  title: 'Timeuh - Portfolio',
  description: 'Personal portfolio of Timeuh',
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang='fr' className={`${Rubik.variable} ${BricolageGroteske.variable}`}>
      <body className={css({fontFamily: 'rubik'})}>
        <LanguageProvider>
          <Navbar />
          <QueryProvider>{children}</QueryProvider>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
