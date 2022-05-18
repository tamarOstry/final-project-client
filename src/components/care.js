
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import NavTabs from './linkTab'
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
import { saveEating } from '../api/care';
import '../css/dialog.css';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

const marks = [
  {
      value: 30,
      label: '30°C',
  },
  {
    value: 33,
    label: '30°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 40,
    label: '40',
  },
];

function valuetext(value) {
  return `${value}°C`;
}


const images = [
  {
    url: '../images/A.jpg',
    title: 'האכלה',
    width: '40%',
    components: 'eating',
  },
  {
    url: '../images/A.jpg',
    title: 'החתלה',
    width: '30%',
    components: 'diaper',

  },
  {
    url: '../images/A.jpg',
    title: 'רחצה',
    width: '30%',
    components: 'shower',
  },
  {
    url: '../images/A.jpg',
    title: 'חום',
    width: '30%',
    components: 'fever',
  },
  {
    url: '../images/A.jpg',
    title: 'צהבת',
    width: '30%',
    components: 'jaundice',

  },
  {
    url: '../images/A.jpg',
    title: 'גובה ומשקל',
    width: '30%',
    components: 'LengthWeight'
  },
];

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

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Care() {
  const [openEating, setOpenEating] = useState(false);
  const [openDiaper, setOpenDiaper] = useState(false);
  const [openShower, setOpenShower] = useState(false);
  const [openFever, setOpenFever] = useState(false);
  const [openJaundice, setOpenJaundice] = useState(false);
  const [openLengthWeight, setOpenLengthWeight] = useState(false);
  const [type, setType] = useState("");
  const [ammount, setAmmount] = useState("");
  const history = useHistory();

    const handleClickOpen = (component) => {
      switch (component) {
        case "eating":setOpenEating(true);break;
        case "diaper":setOpenDiaper(true);break;
        case "shower":setOpenShower(true);break;
        case "fever":setOpenFever(true);break;
        case "jaundice":setOpenJaundice(true);break;
        case "LengthWeight":setOpenLengthWeight(true);break;
        default:
          break;
      }
      
    };

  const handleClose = (component) => {
    switch (component) {
      case "eating":setOpenEating(false);break;
      case "diaper":setOpenDiaper(false);break;
      case "shower":setOpenShower(false);break;
      case "fever":setOpenFever(false);break;
      case "jaundice":setOpenJaundice(false);break;
      case "LengthWeight":setOpenLengthWeight(false);break;
      default:
        break;
    }
    history.push('./care')
  };

  const handleSave = async (component) => {
    switch (component) {
      case "eating":setOpenEating(false);break;
      case "diaper":setOpenDiaper(false);break;
      case "shower":setOpenShower(false);break;
      case "fever":setOpenFever(false);break;
      case "jaundice":setOpenJaundice(false);break;
      case "LengthWeight":setOpenLengthWeight(false);break;
      default:
        break;
    }
    await saveEating(type, ammount);
    history.push('./care')
  };

  return (
    <div>
      <NavTabs />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => handleClickOpen(image.components)}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>

     {/* eating */}

      <div>
      <BootstrapDialog
        onClose={() => handleClose}
        aria-labelledby="customized-dialog-title"
        open={openEating}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={()=>handleClose('eating')}>
          האכלה
        </BootstrapDialogTitle>
        <DialogContent dividers>
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
            {/* <label class="form-label" for="typeNumber">Number input</label> */}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSave('eating')}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>


     {/* diaper */}

     <div>
      <BootstrapDialog
        onClose={() => handleClose('diaper')}
        aria-labelledby="customized-dialog-title"
        open={openDiaper}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={()=>handleClose('diaper')}>
          החתלה
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom dir='rtl'>
            בחרי סוג מנה:
          </Typography>
          <FormControl dir='rtl'>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
              <FormControlLabel value="גדול" control={<Radio />} label="גדול" 
                  onClick={e => e.target.checked?setType("BIG"):""}/>
              <FormControlLabel value="קטן" control={<Radio />} label="קטן"
                onClick={e => e.target.checked?setType("SMALL"):""}/> 
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSave('diaper')}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );

     
  {/* shower */}

  <div>
      <BootstrapDialog
        onClose={() => handleClose}
        aria-labelledby="customized-dialog-title"
        open={openShower}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={()=>handleClose('shower')}>
          רחצה
        </BootstrapDialogTitle>
        <DialogContent dividers className='Dialog'>
          <FormControl dir='rtl'>
              <label>נעשתה רחצה</label>
              <Checkbox defaultChecked/>
          <Stack component="form" noValidate spacing={3}>
             <TextField
                id="datetime-local"
                label="שעת הרחצה"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
            />
          </Stack>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSave('shower')}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
    
    {/* fever */}

    <div className='Dialog'>
      <BootstrapDialog
        onClose={() => handleClose('fever')}
        aria-labelledby="customized-dialog-title"
        open={openFever}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          חום
        </BootstrapDialogTitle>
           <Box sx={{ width: 300 }}>
               <Slider
                 aria-label="Always visible"
                 defaultValue={80}
                 getAriaValueText={valuetext}
                 step={10}
                 marks={marks}
                 valueLabelDisplay="on"
               />
           </Box>
        <DialogActions>
          <Button onClick={() => handleSave('fever')}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>

  {/* jaundice */}

  <div className='Dialog'>
      <BootstrapDialog
        onClose={() => handleClose('jaundice')}
        aria-labelledby="customized-dialog-title"
        open={openJaundice}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          צהבת
        </BootstrapDialogTitle>
          
        <DialogActions>
          <Button onClick={() => handleSave('jaundice')}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>


  {/* LengthWeight */}

  <div className='Dialog'>
      <BootstrapDialog
        onClose={() => handleClose('LengthWeight')}
        aria-labelledby="customized-dialog-title"
        open={openLengthWeight}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          גובה ומשקל
        </BootstrapDialogTitle>
        <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        ></Box>
        <div>אורך:</div>
        <TextField
          id="standard-number"
          label="cm"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <div>משקל:</div>
        <TextField
          id="standard-number"
          label="kg"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <DialogActions>
          <Button onClick={() => handleSave('LengthWeight')}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>


    </div>
  );
}
