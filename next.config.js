const { withSentryConfig } = require('@sentry/nextjs');

const OLD_BLOG_URL = 'https://hn.nikolovlazar.com';
const oldBlogPosts = [
  '/portfolio-beef-1-free-designs-for-beginner-front-end-developers',
  '/my-2020-retrospective',
  '/living-with-a-migraine-as-a-software-developer',
  '/an-easy-react-17-typescript-tailwind-css-nextjs-setup',
  '/debugging-nextjs',
  '/improve-your-design-handoff',
  '/uxcel-ux-ui-for-developers-and-designers',
  '/how-to-render-your-website',
];

const moduleExports = {
  swcMinify: true,
  images: {
    domains: [
      'img.youtube.com',
      'dl.airtable.com',
      'v5.airtableusercontent.com',
      'hn.nikolovlazar.com',
      'opengraph.githubassets.com',
    ],
  },
  async redirects() {
    return [];
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  token: process.env.SENTRY_AUTH_TOKEN,
  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, {
  dryRun: process.env.VERCEL_ENV !== "production"
});