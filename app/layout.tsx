import Head from '../components/Head';
import Nav from '../components/Nav';
import Header from '../components/Header';
import '../styles/globals.css';
import styles from "./layout.module.css";

type Props = { children: React.ReactNode; };
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <Head/>
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
