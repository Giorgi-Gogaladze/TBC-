import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import routing from "../../i18n/routing";
import { NextIntlClientProvider } from "next-intl";

export default async function LocaleLayout ({children, params: {locale}}) {

    if(!routing.locales.includes(locale)){
        notFound()
    }
    const messages = await getMessages;

     return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
    }