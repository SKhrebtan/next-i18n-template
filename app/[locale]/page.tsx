import React from 'react';
import LanguageBtnList from "@/components/LanguageBtnList/LanguageBtnList";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider"
import GoodbyeExampleComp from "@/components/GoodbyeExampleComp";

type HomeProps = {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }:HomeProps) {
   const { t,resources } = await initTranslations(locale, ['common']) 
  
  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={['common']}>
    <main>
      <LanguageBtnList />
        <div>{t('welcome')}</div>
        <GoodbyeExampleComp/>
      </main>
      </TranslationsProvider>
  );
}
