import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BeatLoader from "react-spinners/BeatLoader";
import Typography from '@mui/material/Typography';
import { ConctactForm} from './ContactUs';

import "../styles/contactButton.css";

export const ContactButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickOpen = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen(true);
    }, 1000); // Simulación de carga durante 1 segundo
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="contact_button" onClick={handleClickOpen}>
        {isLoading ? (
          <div className='loading'>

          <BeatLoader color="#36d7b7" size={15} /> </div>
        ) : (
          <div className="floating_button">
            <span className="contact_text">Contact Us</span>
            <i className="bi bi-wechat"></i>
          </div>
        )}
      </div>

      <BootstrapDialog 
        onClose={handleClose} 
        open={open} 
        aria-labelledby="customized-dialog-title"
        
        sx={{
          width:'100%',
          height: 'auto',
          maxHeight: 'none',
          overflowY:'scroll',
        }}
        PaperProps={{
          style: {
            height: 'auto',
            maxHeight:'none',
            maxWidth:'970px',
            
          },
        }}
        >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <p className='my_title--black' style={{fontSize:'1.5rem'}}>Contact Form</p>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'grey[500]' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <div className="mytext--contactform">
            <p className="my_paragraph--black">
              If you would like to make a purchase, receive more information about
              our solutions, or make any other inquiries, we kindly ask you to fill
              out the form or call one of our regional phone numbers.
            </p>
          </div>
            <ConctactForm/>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

// Definición del diálogo estilizado
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
