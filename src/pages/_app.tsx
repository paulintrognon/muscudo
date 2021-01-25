import { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import 'tailwindcss/tailwind.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
