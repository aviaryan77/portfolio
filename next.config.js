/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/projects', destination: '/#archive', permanent: true },
      { source: '/resume', destination: '/#experience', permanent: true },
      { source: '/CV_Avinash.pdf', destination: '/Avinash_Aryan_Resume.pdf', permanent: true },
    ];
  },
};

module.exports = nextConfig;
