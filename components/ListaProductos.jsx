import axios from 'axios';
import ProductoCard from '../components/Cards'
import { useEffect, useState } from 'react';
import { Box, Container, Button, Grid } from "@mui/material";
import { useRouter } from 'next/router'

const ListaProductos = () => {

    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        console.log(response.data)
        setProductos(response.data.results)
      }
    
    
      useEffect(() => {
        getProductos();
      }, [])
    
      return (
        <>
          <Box
            sx={{
              width: "90%",
              margin: "0 auto",
              backgroundImage: "url('https://i.pinimg.com/originals/7a/7c/18/7a7c18ee47a497477431769ca60b9f6d.jpg')",
              borderRadius: "7px",
            }}
          >
            <Container>
              <Grid container spacing={1} my={2} rowSpacing={2}>
               {productos.map((producto) => (
                  <ProductoCard
                    id={producto.id}
                    key={producto.id}
                    name={producto.name}
                    species={producto.species}
                    imagen={producto.image}
                    gender={producto.gender}
                    status={producto.status}


                  />
                ))}
              </Grid>
            </Container>
          </Box>
        </>
      )
    }

export default ListaProductos