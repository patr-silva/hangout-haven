import MainNavigation from "./MainNavigation";
import Head from 'next/head';

function Layout(props) {
  return (
    <div>
      <Head>
        <title>Hangout Haven</title>
      </Head>
      <MainNavigation />
      <main className={`main`}>{props.children}</main>
    </div>
  );
}

export default Layout;
