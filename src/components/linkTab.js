import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { tabsClasses } from '@mui/material/Tabs';
import { useHistory } from "react-router-dom";
import { useState } from "react";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = useState(0);
	const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} variant="scrollable"
         scrollButtons aria-label="isible arrows tabs example" sx={{
         [`& .${tabsClasses.scrollButtons}`]: {
        '&.Mui-disabled': { opacity: 0.3 },
      },
    }}>
        <LinkTab label="חיפוש תינוק"  onClick={()=>history.push('/searchBaby')} />
        <LinkTab label="היסטוריה" onClick={()=>history.push('/historyCare')}  />
        <LinkTab label="טיפול" onClick={()=>history.push('/care')} />
      </Tabs>
    </Box>
  );
}
