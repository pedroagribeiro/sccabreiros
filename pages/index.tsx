import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sporting Clube de Cabreiros</title>
        <meta name="description" content="Sporting Clube de Cabreiros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
       <div className="flex flex-col items-center justify-center space-y-4 h-screen p-10"> 
        <img src="/emblema.png" alt="emblema" style={{ maxWidth: '170px' }}/> 
        <div className="flex flex-col items-center text-center text-green-800">
          <p className="text-2xl font-bold">Sporting Clube de Cabreiros</p> 
          <p className="text-xl">desde 1932</p>
        </div>
        <p className="text-wrap text-center text-green-800">Estamos a trabalhar para construir uma excelente experiência para os nossos utilizadores</p>
       </div>
      </main>
    </div>
  )
}

export default Home
