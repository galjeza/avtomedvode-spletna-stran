
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

type Props = {
  children?: JSX.Element | JSX.Element[];};

export default function Layout({ children }: Props) {
  return (
    <>
    <Head>
    <title>Avtomedvode - prodaja in odkup rabljenih vozil</title>
    <meta name="description" content="Prodaja rabljenih vozil, odkup vozil, prepis lastništva vozila. AvtoMedvode, vaš najbolj zanesljiv partner."
    />
    <meta name="keywords" content={"prodaja vozil, rabljena vozila, prodaja rabljenih vozil, rabljeno vozilo, prepis lastništva vozila, odkup rabljenih vozil, odkup rabljenega vozila, odkup vozila, prodaja avtomobila, prodaja avta, avto, avtomobil, vozilo"}/>
    <link rel="icon" href="/logo.png" />

    </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}