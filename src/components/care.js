
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
import { saveEating,saveDiaper,saveShower,saveFever,saveJaundice,saveLengthWeight} from '../api/care';
import '../css/dialog.css';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}°C`;
}

const images = [
  {
    url: 'C:/Users/user/Documents/לימודים/יד/מחצית ב/פרויקט גמר/Client/src/images/A.jpg',
    title: 'האכלה',
    width: '40%',
    components: 'eating',
  },
  {
    url: 'C:/Users/user/Documents/לימודים/יד/מחצית ב/פרויקט גמר/Client/src/images/p.jpg',
    title: 'החתלה',
    width: '30%',
    components: 'diaper',

  },
  {
    url: 'C:/Users/user/Documents/לימודים/יד/מחצית ב/פרויקט גמר/Client/src/images/A.jpg',
    title: 'רחצה',
    width: '30%',
    components: 'shower',
  },
  {
    url: 'C:/Users/user/Documents/לימודים/יד/מחצית ב/פרויקט גמר/Client/src/images/A.jpg',
    title: 'חום',
    width: '30%',
    components: 'fever',
  },
  {
    url: 'C:/Users/user/Documents/לימודים/יד/מחצית ב/פרויקט גמר/Client/src/images/A.jpg',
    title: 'צהבת',
    width: '30%',
    components: 'jaundice',

  },
  {
    url: 'C:/Users/user/Documents/לימודים/יד/מחצית ב/פרויקט גמר/Client/src/images/A.jpg',
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

  const [typeEating, setTypeEating] = useState("");
  const [ammountEating, setAmmountEating] = useState("");
  const [big, setBig] = useState(false);
  const [small, setSmall] = useState(false);
  const [ifShower, setIfShower] = useState(false);
  const [dateShower,setDateShower]=useState(new Date)
  const [fever, setFever] = useState(0);
  const [jaundice, setJaundice] = useState(0);
  const [length, setLength] = useState(0);
  const [weight, setWeight] = useState(0);

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
  };

  const handleSave = async (component) => {
    switch (component) {
      case "eating":{
        setOpenEating(false);
        {console.log(typeEating,ammountEating, "typeEating,ammountEating")}
        await saveEating(typeEating, ammountEating);
        break;
      }
      case "diaper":{
        setOpenDiaper(false);
        {console.log(big,small, "big,small")}
        await saveDiaper(big,small);
        break;
      }
      case "shower":{
        setOpenShower(false);
        {console.log(ifShower,dateShower, "ifShower,dateShower")}
        await saveShower(ifShower,dateShower);
        break;
      }
      case "fever":{
        setOpenFever(false);
        {console.log(fever, "fever")}
        await saveFever(fever);
        break;
      }
      case "jaundice":{
        setOpenJaundice(false);
        {console.log(jaundice, "jaundice")}
        await saveJaundice(jaundice);
        break;
      }
      case "LengthWeight":{
        setOpenLengthWeight(false);
        {console.log(length,weight, "length,weight")}
        await saveLengthWeight(length,weight);
        break;
      }
      default:
        break;
    }
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
            <ImageSrc className="image"  style={{ backgroundImage: `url(${image.url})` }}/>
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
                  onClick={e => e.target.checked?setTypeEating("MOTHER_MILK"):""}/>
              <FormControlLabel value="מטרנה" control={<Radio />} label="מטרנה"
                onClick={e => e.target.checked?setTypeEating("MATERNA"):""}/> 
              <FormControlLabel value="סימילאק" control={<Radio />} label="סימילאק" 
                  onClick={e => e.target.checked?setTypeEating("SIMILAC"):""}/>
              <FormControlLabel value="נוטרימיגן" control={<Radio />} label="נוטרימיגן" 
                  onClick={e => e.target.checked?setTypeEating("NUTRIMIGEN"):""}/>
            </RadioGroup>
          </FormControl>
          <Typography gutterBottom dir='rtl'>
            כמות:
          </Typography>
          <div dir='rtl' className="form-outline">
            <input type="number" min={0} max={300} id="typeNumber" className="form-control" onChange={(q) => setAmmountEating(q.target.value)} />
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
        <DialogContent dividers dir="rtl">
          <label className="form-label" >גדול</label>
          <Checkbox onClick={e => e.target.checked?setBig(true):setBig(false)} />
          <label className="form-label" >קטן</label>
          <Checkbox onClick={e => e.target.checked?setSmall(true):setBig(false)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSave('diaper')}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>

     
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
              <Checkbox onClick={e => e.target.checked?setIfShower(true):setIfShower(false)}/>
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
                onChange={e => setDateShower(e.target.value)}
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={()=>handleClose('fever')}>
          חום
        </BootstrapDialogTitle>
           <Box sx={{ width: 300 }}>
             <Slider
                aria-label="Small steps"
                defaultValue={38.000000}
                getAriaValueText={valuetext}
                step={0.1}
                marks
                min={33.00000000}
                max={43.00000000}
                valueLabelDisplay="auto"
                onChange={e=>setFever(e.target.value)}
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
        onClose={() => handleClose}
        aria-labelledby="customized-dialog-title"
        open={openJaundice}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={()=>handleClose('jaundice')}>
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={()=>handleClose('LengthWeight')}>
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
          onChange={e => setLength(e.target.value)}
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
          onChange={e => setWeight(e.target.value)}

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
