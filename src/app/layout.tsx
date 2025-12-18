import './globals.css';

import type { Metadata } from 'next';
import React from 'react';

import { robotoFlex } from '@/shared/config/fonts';

export const metadata: Metadata = {
  title: 'Plan 9',
  description: 'Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={robotoFlex.variable}>{children}</body>
    </html>
  );
}
