import Layout from '../Components/Layout'
import NavBar from '../Components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
