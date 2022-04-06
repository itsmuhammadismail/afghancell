import "../styles/globals.css";

import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </RecoilRoot>
  );
}

export default MyApp;
