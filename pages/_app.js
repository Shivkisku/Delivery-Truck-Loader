import '../styles/globals.css';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Component {...pageProps} />
      <Loader />
    </div>
  );
}

export default MyApp;
