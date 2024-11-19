/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');

module.exports = {
  siteUrl: 'https://www.hjalmargraphics.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/_next/' },
    ],
  },
  additionalPaths: async (config) => {
    const projectSlugs = fs.readdirSync(path.join(process.cwd(), 'app/data/projects'))
      .map((filename) => `/projects/${filename.replace(/\.md$/, '')}`);

    return projectSlugs.map((slug) => ({
      loc: slug,
      changefreq: 'daily',
      priority: 0.7,
    }));
  },
};
