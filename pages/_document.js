import Document, { Html, Head, Main, NextScript } from 'next/document'

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
        </Head>
        <body>
          <div className="main">
            <Main />
          </div>
          <NextScript />
          <footer>
            <img width="30" height="30" src="icons/1f48e.png"/>
          </footer>
        </body>
      </Html>
    )
  }
}

export default MainDocument