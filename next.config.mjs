/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
    return [{source: '/samco',destination: '/samco-demat-account-opening',permanent: true}];
  },
};

export default nextConfig;
