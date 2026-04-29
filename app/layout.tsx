import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jintae Yang · 양진태',
  description: 'Dossiê № 0734 · Arquivo de Feiticeiros · Acesso Restrito',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
