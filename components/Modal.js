import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardMedia } from '@mui/material';
import styles from '../styles/Home.module.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({gender, modal, OpenCloseModal, imagen, name}) {
  return (
    <div>
      <Button className={styles.boton2} onClick={OpenCloseModal}>mayor tamaño</Button>
      <Modal
        open={modal}
        onClose={OpenCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="black" id="modal-modal-title" variant="h6" component="h2">
            <h2>{name}</h2>
          </Typography>
          <CardMedia component="img" height="400" image={imagen} alt="" />
        </Box>
      </Modal>
    </div>
  );
}
