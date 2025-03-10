import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['next-mdx-remote'],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.urbanaut.club",
                pathname: "/**",
            },
        ],
    }
};

export default withNextIntl(nextConfig);