import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { latin } from '@bbc/gel-foundations/scripts';
import { russian as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Europe/London';

const service = {
  lang: `ru-RU`,
  articleAuthor: `https://www.facebook.com/bbcrussian`,
  articleTimestampPrefix: 'Updated',
  atiAnalyticsAppName: 'news-russian',
  brandName: 'BBC News Русская служба',
  product: 'BBC News Русская служба',
  defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/russian.png',
  defaultImageAltText: 'BBC News Русская служба',
  dir: `ltr`,
  externalLinkText: ', external',
  imageCaptionOffscreenText: 'Image caption, ',
  videoCaptionOffscreenText: 'Video caption, ',
  audioCaptionOffscreenText: 'Audio caption',
  defaultCaptionOffscreenText: 'Caption, ',
  imageCopyrightOffscreenText: 'Image source, ',
  locale: `ru-RU`,
  datetimeLocale: `ru-RU`.toLowerCase(),
  service: 'russian',
  serviceName: 'News Русская служба',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@bbcrussian',
  twitterSite: '@bbcrussian',
  noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
  script: latin,
  manifestPath: '/manifest.json',
  swPath: '/sw.js',
  translations: {
    seeAll: 'See all',
    error: {
      404: {
        statusCode: '404',
        title: '404 - Страница не найдена',
        message:
          'Возможно, вы ввели неверный адрес. Пожалуйста, проверьте адрес и написание.',
        solutions: [
          'Double checking the url',
          'Hitting the refresh button in your browser',
          'Searching for this page using the BBC search bar',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'Вернуться на главную',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/russian',
      },
      500: {
        statusCode: '500',
        title: '500 - Ошибка',
        message: 'Произошла ошибка. Пожалуйста, перегрузите страницу.',
        solutions: [
          'Hitting the refresh button in your browser',
          'Coming back again later',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'Вернуться на главную',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/russian',
      },
    },
    consentBanner: {
      privacy: {
        title: "We've updated our Privacy and Cookies Policy",
        description: {
          uk: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
          international: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
        },
        accept: 'OK',
        reject: "Find out what's changed",
        rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
      },
      cookie: {
        title: 'Let us know you agree to cookies',
        description: {
          uk: {
            first: 'We use ',
            linkText: 'cookies',
            last:
              ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
          international: {
            first: 'We and our partners use technologies, such as ',
            linkText: 'cookies',
            last:
              ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
        },
        accept: 'Yes, I agree',
        reject: 'No, take me to settings',
        rejectUrl:
          'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
      },
    },
    media: {
      audio: 'Аудио',
      photogallery: 'Фото',
      video: 'Видео',
      bbc_russian_radio: {
        title: 'Русская служба Би-би-си',
        subtitle:
          'мировые новости с местным колоритом. Как видятся события в России и регионе из-за рубежа.',
      },
      bbc_russian_tv: {
        title: 'Выпуск новостей Русской службы Би-би-си',
        subtitle:
          'Смотрите лучшие репортажи Би-би-си из России и со всего мира. Каждый день - с понедельника по пятницу – в выпуске теленовостей Би-би-си наши корреспонденты помогут вам понять, что происходит и почему это важно для вас.',
      },
    },
  },
  brandSVG,
  footer: {
    externalLink: {
      href: 'https://www.bbc.co.uk/help/web/links/',
      text: 'Read about our approach to external linking.',
    },
    links: [
      {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Why you can trust the BBC',
      },
      {
        href: 'https://www.bbc.com/terms',
        text: 'Terms of Use',
      },
      {
        href: 'https://www.bbc.co.uk/aboutthebbc/',
        text: 'About the BBC',
      },
      {
        href: 'https://www.bbc.com/privacy/',
        text: 'Privacy Policy',
      },
      {
        href: 'https://www.bbc.com/usingthebbc/cookies/',
        text: 'Cookies',
      },
      {
        href: 'https://www.bbc.com/accessibility/',
        text: 'Accessibility Help',
      },
      {
        href: 'https://www.bbc.com/contact/',
        text: 'Contact the BBC',
      },
    ],
    copyrightText:
      'Би-би-си. Би-би-си не несет ответственности за содержание других сайтов.',
  },
  fonts: [],
  timezone: 'Europe/London',
};

export default service;
