import Head from "next/head";

export default class extends React.PureComponent {
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful");
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }
  render() {
    return (
      <div className="container">
        <Head>
          <link rel="manifest" href={"/manifest.json"} />
        </Head>
        {/* <p>Check the console for the Service Worker registration status.</p> */}
        <h1>Homepage</h1>
      </div>
    );
  }
}
