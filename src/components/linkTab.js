import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { tabsClasses } from '@mui/material/Tabs';

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
  const [value, setValue] = React.useState(0);

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
        <LinkTab label="חיפוש תינוק" href="/searchBaby" />
        <LinkTab label="היסטוריה" href="/historyCare" />
        <LinkTab label="טיפול" href="/care" />
      </Tabs>
    </Box>
  );
}
