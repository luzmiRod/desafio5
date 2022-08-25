import React from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@mui/material'
import styles from '../styles/Home.module.css'
import { Link } from '@mui/icons-material'
import { useRouter } from 'next/router'

const ProductoCard = ({ id, serie, creador, imagen, canal, dates }) => {
  const router = useRouter()

  return (
    <div className={styles.box}>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia component="img" height="300" image={imagen} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <p> Serie: {serie} </p>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <p> Creada por: {creador} </p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p> Mirala en: {canal} </p>
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              color="secondary"
              arial-label="add to shopping cart"
              onClick={() => router.push(`/products/${id}`)}
            >
              <Link />
            </IconButton>
          </CardActions>
        </Card>
    </div>
  )
}

export default ProductoCard