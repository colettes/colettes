import '../styles/globals.css'
import Title from '../components/Title'

function MyApp({ Component, pageProps }) {
  return (<><Title /><Component {...pageProps} /></>)
}

export default MyApp;
