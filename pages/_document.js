import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    // console.log("Document file");
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href={"/manifest.json"} />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          {/* <link
            rel="shortcut icon"
            href={"https://cdn.firstup.com/favicon.png"}
            type="image/png"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
