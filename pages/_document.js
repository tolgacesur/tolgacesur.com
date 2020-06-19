import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from '../config';

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Tolga Cesur</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
          <link rel="manifest" href="/site.webmanifest" />
          <script
            data-name="BMC-Widget"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id={config.BUYMECOFFE_USERNAME}
            data-description="Support me on Buy me a coffee!"
            data-message="Thank you for visiting. You can now buy me a coffee!"
            data-color="#0000"
            data-position="right"
            data-x_margin="25"
            data-y_margin="25"
          ></script>
        </Head>
        <body>
          <div className="main">
            <Main />
            <footer>
              <img width="30" height="30" src="icons/1f48e.png"/>
            </footer>
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MainDocument