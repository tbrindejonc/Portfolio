import type {Metadata} from 'next';
import './globals.css';
import {PropsWithChildren} from 'react';
import {BricolageGroteske, Rubik} from '@assets/fonts/fonts';

export const metadata: Metadata = {
  title: 'Timeuh - Portfolio',
  description: 'Personal portfolio of Timeuh',
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang='fr' className={`${Rubik.variable} ${BricolageGroteske.variable}`}>
      <body>{children}</body>
    </html>
  );
}
