module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

    siteTitle: 'lencse.io', // Navigation and Site Title
    siteTitleAlt: 'Just another Netlify page', // Alternative Site title for SEO
    siteTitleManifest: 'LencseIo',
    siteUrl: 'https://lencse.io', // Domain of your site. No trailing slash!
    siteLanguage: 'en', // Language Tag on <html> element
    siteHeadline: 'Development blog', // Headline for schema.org JSONLD
    siteBanner: '/social/banner.jpg', // TODO Your image for og:image tag. You can find it in the /static folder
    favicon: 'src/favicon.png', // TODO Your image for favicons. You can find it in the /src folder
    siteDescription: '', // TODO Your site description
    author: 'Lencse', // Author for schemaORGJSONLD
    siteLogo: '/social/logo.png', // TODO Image for schemaORGJSONLD

    // siteFBAppID: '123456789', // Facebook App ID - Optional
    userTwitter: '@leventeloki', // Twitter Username - Optional
    // ogSiteName: 'minimal', // TODO Facebook Site Name - Optional
    ogLanguage: 'en_US', // Facebook Language
    // googleAnalyticsID: 'UA-133826674-1', // TODO enable GA when first post published

    // Manifest and Progress color
    // See: https://developers.google.com/web/fundamentals/web-app-manifest/
    themeColor: '#3498DB',
    backgroundColor: '#2b2e3c',
}
