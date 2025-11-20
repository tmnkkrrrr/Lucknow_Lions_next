/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/samco', destination: '/samco-demat-account-opening', permanent: true },
    { source: '/zerodha_ats', destination: '/blogs/latest/ato', permanent: true },
    { source: '/seejobs', destination: '/', permanent: true },
    { source: '/$', destination: '/', permanent: true },
    { source: '/&', destination: '/', permanent: true },
    { source: '/contact-us', destination: '/contact_us', permanent: true },
    { source: '/about-us', destination: '/about_us', permanent: true },
    { source: '/comments/feed', destination: '/', permanent: true },
    { source: '/2020/03/22/about-coronavirus-in-hindi', destination: '/', permanent: true },
    { source: '/tag/upstox-free-account-opening', destination: '/', permanent: true },
    { source: '/tag/rksv', destination: '/', permanent: true }]
  },
};

export default nextConfig;