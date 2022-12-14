import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Head from 'next/head'
// import useAuth from '../../hooks/useAuth'

const ProductDet = () => {
    const router = useRouter()
  /* const auth = useAuth()
  

  useEffect(() => {
    const user = auth.getUserData()
    if (user === null) router.push('/login')
  }, []) */

  const [producto, setProducto] = useState([])

  useEffect(() => {
    axios
       .get(`https://rickandmortyapi.com/api/character/${router.query.id}`)
       .then((res) => {
         setProducto(res.data)
       })
       .catch((err) => console.log(err))
  }, [])

  return (
    <>
    <Head>
        <title>Caracteristicas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://th.bing.com/th/id/R.1f950449af841f18d034941076fad10e?rik=d2ai81zfQo9Srw&pid=ImgRaw&r=0" />
      </Head>
    <div className={styles.cardIndividual2}>
      <Card sx={{ maxWidth: "auto", height: "auto" }}>
        <CardActionArea>
          <CardMedia className={styles.imgProd}
            component="img"
            height="500"
            image={producto.image}
            alt="imagen de la serie"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    </>
  )
}

export default ProductDet