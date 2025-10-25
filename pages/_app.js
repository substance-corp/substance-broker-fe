import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Pages that don't need the layout (like login)
  const noLayoutPages = ['/login', '/signup', '/forgot-password'];
  const isNoLayout = noLayoutPages.includes(router.pathname);

  if (isNoLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
