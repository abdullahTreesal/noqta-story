import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "تريسال",
  description: "تريسال",

  lang: "ar",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "الرئيسية", link: "/" },
      { text: "موقع نقطة", link: "https://www.noqta.ps" },
    ],

    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: "الرئيسية",
        link: "/index.md",
      },
      {
        text: "قصة شركة تريسال",
        link: "/قصة شركة تريسال/index.md",
      },
      {
        text: "تعريفات مهمة",
       
        items: [
          {
            text: "منتجات شركة تريسال",
            link: "/منتجات شركة تريسال/index.md",
            items: [{
              text: "منصة نقطة",
              link: "/منتجات شركة تريسال/منصة نقطة/index.md",
              items: [
                {
                  text: "قصة منصة نقطة",
                  link: "/منتجات شركة تريسال/منصة نقطة/1.قصة منصة نقطة.md",
                },
                {
                  text: "الحزم والمزايا",
                  link: "/منتجات شركة تريسال/منصة نقطة/2.الحزم والمزيا.md",
                },
                {
                  text: " منافسيين نقطة",
                  link: "/منتجات شركة تريسال/منصة نقطة/3.منافسيين نقطة.md",
                },
              ],
            }]
          },
          
        ],
      }
    ],

    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/treesal.ps" },
      { icon: "instagram", link: "https://www.instagram.com/treesal.co/" },
      { icon: "facebook", link: "https://www.facebook.com/profile.php?id=61569400462775" },
      { icon: "instagram", link: "https://www.instagram.com/noqtaps/" },
    ],
  },
});
