import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import RootLayout from '../layout';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale?: 'en' | 'gr'; 
  };
}

export default async function LocaleLayout({
  children,
  params = {},
}: LocaleLayoutProps) {
  const { locale ='en' } = params;

  console.log('Locale params:', params);

  if (!locale || !routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({locale: locale as string});

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <RootLayout locale={locale}>{children}</RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
