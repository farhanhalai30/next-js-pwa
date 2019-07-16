export default class MainApp extends React.Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      ...pageProps
    };
  }

  render() {
    const { Component } = this.props;
    return (
      <div className="">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/test1">Test 1</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <Component />
      </div>
    );
  }
}
