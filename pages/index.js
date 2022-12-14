import Head from 'next/head'
import Image from 'next/image'
import ListaProductos from '../components/ListaProductos'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { useRouter } from 'next/router'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RickyMartin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://th.bing.com/th/id/R.1f950449af841f18d034941076fad10e?rik=d2ai81zfQo9Srw&pid=ImgRaw&r=0" />
      </Head>

      <Navbar/>
      <Hero/>
      <ListaProductos/>
      <Footer/>

    </div>
  )
}
