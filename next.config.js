/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    nomDomaine: process.env.nomDomaine
  }
}

module.exports = nextConfig
