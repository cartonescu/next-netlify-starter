import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cartonescu.ro - Cumpara cutii de carton, folie cu bule si materiale de ambalare ieftine</title>
    <meta name="description" content="Sc Amc Light Pack SRL (www.cartonescu.ro) - cumpara materiale pentru ambalarea usoara si rapida a obiectelor tale. Transporta in siguranta produsele tale folosind materialele noastre de ambalat." />
    <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cartonescu.ro" />
        <p className="description">
          <code>Cutii de carton ieftine, Cutii carton cu autoformare, cumpara folie cu bule ieftina, banda adeziva, folie stretch</code>
        </p>
    <a href="https://amclightpack.ro">Sc Amc Light Pack SRL</a>
      </main>

      <Footer />
    </div>
  )
}
