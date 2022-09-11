import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Le Petit Chat!" />
        <p className="description">
          By Lily E. Hartman
        </p>
    <p>
      <img src="https://github.com/lilyehartman/le-petit-chat/raw/main/78AC4216-6B14-4F13-9617-700D42D853E0.jpeg" />
    </p>
      </main>

      <Footer />
    </div>
  )
}
