import React from "react"
import { Box, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const Footer = () => {
    return (
        <footer>
            <Box class="color-nav" sx={{
                heigth: "50px",
                width: "100%",
                padding: "2rem 0",
                boxShadow: "0px 3px 8px #ddd"
            }}>
                <Grid container sx={{ width: "50%", margin: "0 auto" }}>
                    <Grid item xs={4} md={4}>
                        <Tooltip title="WhatsApp">
                        <a href="https://wa.me/3794609814" target="_blank" rel="nooopener noreferrer">
                            <WhatsAppIcon
                                sx={{ width: "100%", color: "#1b5e20", fontSize: "2rem" }} />
                        </a>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={4} md={4}>
                    <Tooltip title="Facebook">
                        <a href="https://www.facebook.com" target="_blank"
                            rel="nooopener noreferrer">
                            <FacebookIcon
                                sx={{ width: "100%", color: "#0d47a1", fontSize: "2rem" }} />
                        </a>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Tooltip title="Instagram">
                        <a href="https://www.instagram.com" target="_blank"
                            rel="nooopener noreferrer">
                            <InstagramIcon
                                sx={{ width: "100%", color: "#f50057", fontSize: "2rem" }} />
                        </a>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Box>
        </footer>


    )
}


export default Footer