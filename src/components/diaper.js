import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { saveEating } from '../api/care'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(true);
  const [type, setType] = useState("");
  const [ammount, setAmmount] = useState("");

  const history = useHistory();

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  const handleClose = () => {
    setOpen(false);
    history.push('./care')
  };

  const handleSave = async () => {
    //const radioButtons = document.querySelectorAll('FormControlLabel[name="MILK"]'); 
    // if(document.getElementById('milk').checked)
    //    setType('MILK');
    // for (const radioButton of radioButtons) {
    //      if (radioButton.checked) {
    //         setType(radioButton.value);
    //         console.log(type);
    //         break;
    //        }
    //  }
    setOpen(false);
    debugger
    await saveEating(type, ammount);
    history.push('./care')
  };

  return (
    <div >
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          החתלה
        </BootstrapDialogTitle>
        {/* <DialogContent dividers>
          <Typography gutterBottom dir='rtl'>
            בחרי סוג מנה:
          </Typography>
          <FormControl dir='rtl'>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
              <FormControlLabel value="חלב אם" control={<Radio />} label="חלב אם" 
                  onClick={e => e.target.checked?setType("MOTHER_MILK"):""}/>
              <FormControlLabel value="מטרנה" control={<Radio />} label="מטרנה"
                onClick={e => e.target.checked?setType("MATERNA"):""}/> 
              <FormControlLabel value="סימילאק" control={<Radio />} label="סימילאק" 
                  onClick={e => e.target.checked?setType("SIMILAC"):""}/>
              <FormControlLabel value="נוטרימיגן" control={<Radio />} label="נוטרימיגן" 
                  onClick={e => e.target.checked?setType("NUTRIMIGEN"):""}/>
            </RadioGroup>
          </FormControl>
          <Typography gutterBottom dir='rtl'>
            כמות:
          </Typography>
          <div dir='rtl' className="form-outline">
            <input type="number" min={0} max={300} id="typeNumber" className="form-control" onChange={(q) => setAmmount(q.target.value)} />
          </div>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={() => handleSave()}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
