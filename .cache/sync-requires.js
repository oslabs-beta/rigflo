const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/akosua/Desktop/rigflo/.cache/dev-404-page.js"))),
  "component---src-pages-components-features-jsx": hot(preferDefault(require("/Users/akosua/Desktop/rigflo/src/pages/components/Features.jsx"))),
  "component---src-pages-components-footer-jsx": hot(preferDefault(require("/Users/akosua/Desktop/rigflo/src/pages/components/Footer.jsx"))),
  "component---src-pages-components-hero-jsx": hot(preferDefault(require("/Users/akosua/Desktop/rigflo/src/pages/components/Hero.jsx"))),
  "component---src-pages-components-layout-jsx": hot(preferDefault(require("/Users/akosua/Desktop/rigflo/src/pages/components/Layout.jsx"))),
  "component---src-pages-components-team-jsx": hot(preferDefault(require("/Users/akosua/Desktop/rigflo/src/pages/components/Team.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/akosua/Desktop/rigflo/src/pages/index.js")))
}

