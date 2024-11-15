const baseURL = 'demo.app'

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],
    defaultLocale: 'en'
}

const routes = {
    '/': true,
    '/about': true,
    '/services': true,
    '/blog': true,
    '/contact': true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
    gradient: true,
    dots: true,
    lines: false,
}

const style = {
    theme: 'light',
    neutral: 'gray',
    brand: 'blue',
    accent: 'blue',
    solid: 'contrast',
    solidStyle: 'flat',
    border: 'playful',
    surface: 'translucent',
    transition: 'all'
}

const display = {
    location: true,
    time: true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        gradient: true,
        dots: false,
        lines: true,
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };