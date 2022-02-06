import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oom6bmf.css"
        ></link>
      </Head>
      <div className="relative">
        <Navbar />
        <Component {...pageProps} className="z-40" />
      </div>
    </Provider>
  );
}

export default MyApp;
