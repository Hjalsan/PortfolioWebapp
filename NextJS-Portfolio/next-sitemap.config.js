/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.hjalmargraphics.com', // Replace with your website's URL
    generateRobotsTxt: true, // Automatically generates robots.txt
    changefreq: 'daily', // Set the change frequency as needed
    priority: 0.7, // Set the default priority
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/api/' },
        { userAgent: '*', disallow: '/_next/' },
      ],
    },
  };
  