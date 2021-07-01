import '../styles/_variables.css'
import { GlobalStyle } from '../styles/GlobalStyle'
import MetaHead from '../components/MetaHead'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaHead />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
