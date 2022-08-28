import {useState} from 'react'
import { Grid, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'
import styles from '../styles/Home.module.css'
import  Link  from 'next/link'
import { useRouter } from 'next/router'
import BasicModal from '../components/Modal'

const ProductoCard = ({ id, name, species, imagen, gender}) => {
  const router = useRouter()
  // Estado para el modal
  const [modal, setModal] = useState(false);

  // Funcion que abre y cierra el modal
  const OpenCloseModal = () => setModal(!modal);

  return (
    <>
    <div className={styles.card}>
      <Card className={styles.borde} sx={{ maxWidth: 250, maxHeight: 450 }}>
        <CardMedia component="img" height="250" image={imagen} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <p> {name} </p>
          </Typography>
          <Typography variant="h7" color="text.secondary">
            <p> Especie: {species} </p>
          </Typography>
          <Typography variant="h7" color="text.secondary">
            <p> Género: {gender} </p>
          </Typography>
          
        </CardContent>
        <CardActions>
            <Link href={{ pathname: "/products/[id]", query: { id: id } }}>
             <Button className={styles.boton}>Abrir otra pestaña</Button>
          </Link>
          <BasicModal
              gender={gender}
              OpenCloseModal={OpenCloseModal}
              modal={modal}
              imagen={imagen}
              name={name}
            />

        </CardActions>
      </Card>
    </div>
    </>
  )
}

export default ProductoCard