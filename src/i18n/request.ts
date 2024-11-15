import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound();

  // The `messages` property should be an object containing the translation messages
  // for the specified locale, or `undefined` if you don't have translations for that locale
  const messages = {
    // ... your translation messages for the `locale` ...
  };

  // Return the configuration object with the `messages` property
  return {
    messages,
  };
});