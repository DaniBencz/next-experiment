import Nav from '../components/Nav';
import Header from '../components/Header';
import './globals.css';
import styles from "./layout.module.css";

type Props = { children: React.ReactNode; };
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <title>My Next Experiment</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A Next.Js Practice App" />
        <meta name="keywords" content="next.js, danibencz" />
        <meta name="author" content="Daniel Bencz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <base target="_blank"></base>
      </head>
      <body>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
