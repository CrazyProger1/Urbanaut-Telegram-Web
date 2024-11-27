/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['next-mdx-remote'],
    i18n: {
        locales: ['en-US', 'uk'],
        defaultLocale: 'en-US',
    },

};

export default nextConfig;
