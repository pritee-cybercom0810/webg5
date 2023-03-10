import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
// import TagManager from 'react-gtm-module'

// const tagManagerArgs = {
//   gtmId: 'GTM-000011'
// }
// TagManager.initialize(tagManagerArgs)

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;