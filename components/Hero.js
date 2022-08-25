import React from "react"
import { Container, Typography, Grid, Paper } from '@mui/material'


const Hero = () => {
    return (
        <>
        <div></div>
            <Paper
                sx={{
                    backgroundImage: "url('https://tracklist.com.br/wp-content/uploads/2021/08/CapaPost.png')",
                    width: "100%",
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <Container maxWidth="md" sx={{ height: "100%" }}>
                    <Grid container justifyContent="center" alignItems="right"
                        sx={{ height: "100%" }}>
                        <Grid item>
                            <Typography color="#fff" component="div" fontFamily="BlinkMacSystemFont"
                                fontWeight="900" variant="h5" backgroundColor="black"
                                sx={{
                                    textShadow: "0px 1px 3px #333",
                                }}
                            >
                                ¿Queres revivir series que te gustaron?
                            </Typography>
                            <Typography color="black" backgroundColor="white" fontFamily="Segoe UI" fontWeight="700" variant="h5"
                            >
                                Encontrá donde verlas..
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}


export default Hero