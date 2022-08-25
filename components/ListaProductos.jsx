import axios from 'axios';
import ProductoCard from '../components/Cards'
import { useEffect, useState } from 'react';
import { Box, Container, Button, Grid } from "@mui/material";
import { useRouter } from 'next/router'

const ListaProductos = () => {

    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        const response = await axios.get('https://peticiones.online/api/series')
        setProductos(response.data)
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
              backgroundColor: "#fff",
              borderRadius: "7px",
            }}
          >
            <Container>
              <Grid container spacing={1} my={2} rowSpacing={2}>
               {productos?.map((producto) => (
                  <ProductoCard
                    id={producto.id}
                    key={producto.id}
                    serie={producto.title}
                    creador={producto.creator}
                    imagen={producto.image}
                    canal={producto.channel}

                  />
                ))}
              </Grid>
            </Container>
          </Box>
        </>
      )
    }

export default ListaProductos