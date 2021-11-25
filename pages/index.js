import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar} from '../components/Navbar'
import { CtaRdv} from '../components/CtaRdv'
import { HeroSection } from '../components/HeroSection'
import { Cabinet } from '../components/Cabinet'


export default function Home() {
  const data = {
    title: 'Prendre soin de vous',
    content: 'Bienvenue au cabinet de sage-femmes de l’Etang Saint Leu  Cécile et Séverine vous accompagnent pendant la grossesse, après la naissance et tout au long de la vie…'
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Cécile Orsot Dessi </title>
        <style href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto:wght@100&display=swap" rel="stylesheet"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
          <div className={styles.bgWrap}>
            <div className='flex flex-col h-full text-center justify-evenly'>
              <h1 className='font-great-wishes text-violette text-4xl lg:text-6xl'>Prendre soin de vous</h1>
              <br />
              <h2 className='font-lora text-white font-bold text-5xl max-w-4xl mx-auto leading-loose'>Bienvenue au cabinet de sage-femmes de l’Etang Saint-Leu</h2>
              <br/>
              <p className='font-lora text-white text-3xl max-w-4xl mx-auto leading-loose'>Cécile vous accompagne pendant la grossesse, après la naissance et tout au long de la vie…</p>
              <br />
              <div className="inline-flex rounded-md shadow">
              <CtaRdv/>
          </div>
        </div>
      </div>
      <HeroSection/>
      <Cabinet/>
    </div>
  )
}
