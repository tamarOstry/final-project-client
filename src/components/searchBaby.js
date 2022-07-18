import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../css/searchBaby.css';
import { getIdentities } from "../api/searchBaby";
import { useHistory } from "react-router-dom";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { findBaby } from "../api/searchBaby";
import { connect } from 'react-redux';
// import {saveIdentity,saveHospitalizationNumber,saveMotherIdentity,saveBirthDate,saveBabyCare,save_id_mongo} from '../../action'

export default function SearchBaby() {
  const history = useHistory();
  const [identitiesNumbers, setIdentitiesNumbers] = useState([]);
  const [choosedBaby, setChoosedBaby] = useState("");
  const [open, setOpen] = useState(false);
  // const [nurse,setNurse]=useState(JSON.parse(sessionStorage.getItem('nurse')).firstName);

  useEffect(() => {
    getIdentities().then(data => {
      setIdentitiesNumbers(data);
    })
  }, []);

  const saveInRedux=(baby)=>{
    //  props.saveIdentity(baby.identity);
    //  props.saveHospitalizationNumber(baby.hospitalizationNumber);
    //  props.saveMotherIdentity(baby.motherIdentity);
    //  props.saveBirthDate(baby.birthDate);
    //  props.saveBabyCare(baby.babyCare);
    //  props.save_id_mongo(baby._id);
  }


  const mapStateToProps=({baby})=>{
    return{
        ...baby
    };
  }

  async function goToHistory() {
    if(choosedBaby){
        await findBaby(choosedBaby).then(baby => {
        if (baby) {
              //saveInRedux(baby);
              history.push('/historyCare')

        }
        else {
          alert("we dont have this baby")
        }
      });
      
    }
    else 
      setOpen(true); 
  }


  return (
    <div className='searchInput'>
      {/* <h2>hi {nurse}</h2> */}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={identitiesNumbers}
        sx={{ width: 300 }}
        onChange={(event, value) => setChoosedBaby(value)}
        renderInput={(params) => <TextField {...params} label="choose baby" />}
      />
      <Box sx={{ width: '19.5%' }}>
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="error"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="error" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          הכניסי מספר אשפוז
        </Alert>
      </Collapse>
    </Box>
      <button onClick={()=>goToHistory()}>insert</button>
    </div>
  );

}

// connect(mapStateToProps,{saveIdentity,saveHospitalizationNumber,saveMotherIdentity,saveBirthDate,saveBabyCare})(SearchBaby)
