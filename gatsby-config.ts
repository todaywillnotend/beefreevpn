// gatsby-config.ts
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BeeFreeVPN`,
    description: `Быстрый, безопасный и анонимный VPN-сервис. Идеальный выбор для вашей свободы в интернете.`,
    author: `BeeFreeVPN Team`, // Добавим автора для SEO
    siteUrl: `https://todaywillnotend.github.io/beefreevpn/`,
  },
  pathPrefix: "/beefreevpn",
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Опции, передаваемые в css-loader
        cssLoaderOptions: {
          modules: {
            // Отключаем namedExport, чтобы был дефолтный экспорт объекта с классами
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {},
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`, // Для файла robots.txt
      options: {
        // host: 'https://todaywillnotend.github.io/beefreevpn/', // Уже берется из siteMetadata.siteUrl
        // sitemap: 'https://todaywillnotend.github.io/beefreevpn/sitemap/sitemap-index.xml', // Автоматически
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // Для PWA
      options: {
        name: `BeeFreeVPN`,
        short_name: `BeeFreeVPN`,
        start_url: `/beefreevpn/`, // С учетом pathPrefix
        background_color: `#FFBF00`, // Пример основного цвета
        theme_color: `#FFBF00`,
        display: `standalone`,
        icon: `src/images/icon.png`, // Путь к вашей иконке (512x512)
        // icons: [ // Можно добавить больше иконок для разных размеров, если нужно
        //   {
        //     src: `src/images/icon-192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `src/images/icon-512.png`, // Ваша основная иконка
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
      },
    },
    `gatsby-plugin-offline`, // Для PWA (должен быть ПОСЛЕ gatsby-plugin-manifest)
    {
      resolve: `gatsby-source-filesystem`, // Уже есть - отлично!
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`, // Используйте ${__dirname} для абсолютного пути
      },
      // __key: "images", // __key генерируется автоматически, можно убрать
    },
  ],
};

export default config;
