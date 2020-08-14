import App from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }) => <AnimatePresence exitBeforeEnter><Component {...pageProps} /></AnimatePresence>

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)