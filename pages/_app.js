import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { useRef } from 'react';
import store from '../store/store';
import Layout from '../components/Layout/Layout';
import Toast from '../components/Common/Toast';
import Loader from '../components/Common/Loader';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const storeRef = useRef();
  
  if (!storeRef.current) {
    storeRef.current = store;
  }
  
  // Pages that don't need the layout (like login)
  const noLayoutPages = ['/login', '/signup', '/forgot-password'];
  const isNoLayout = noLayoutPages.includes(router.pathname);

  return (
    <Provider store={storeRef.current}>
      <Toast />
      <Loader />
      {isNoLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}
