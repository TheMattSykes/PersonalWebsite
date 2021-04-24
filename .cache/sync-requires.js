const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/contact.js"))),
  "component---src-pages-first-year-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/first-year.js"))),
  "component---src-pages-fourth-year-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/fourth-year.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/index.js"))),
  "component---src-pages-modules-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/modules.js"))),
  "component---src-pages-music-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/music.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/projects.js"))),
  "component---src-pages-second-year-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/second-year.js"))),
  "component---src-pages-third-year-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/third-year.js"))),
  "component---src-pages-university-js": hot(preferDefault(require("/Volumes/Matt-SSD-Store/Projects/personal-website/src/pages/university.js")))
}

