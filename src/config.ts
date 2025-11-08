export const SITE = {
  website: "https://github.com/ahmetgungor", // replace this with your deployed domain
  author: "Ahmet Güngör",
  profile: "https://ahmetgungor.dev/",
  desc: "Kişisel Blog - Ahmet Güngör",
  title: "Ahmet Güngör",
  ogImage: "ahmetgungor-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  locale: 'tr_TR',
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "tr", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
