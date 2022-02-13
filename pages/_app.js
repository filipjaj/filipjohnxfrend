import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Filip John x Frend</title>
          <meta name="description" content="Største samarbeidet siden YEEZY" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/oom6bmf.css"
          ></link>
        </Head>
        <div className="relative ">
          <NextNProgress
            color="#F4B7E9"
            startPosition={0.3}
            stopDelayMs={200}
            height={6}
          />
          <Navbar />
          <Component {...pageProps} className="z-40 relative" />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
