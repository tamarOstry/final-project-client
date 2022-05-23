import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavTabs from './linkTab';
import {useState} from 'react';

function createData(name, date, details, nurse) {
  return {
    name,
    date,
    details,
    nurse,
    history: [
      {
        date,
        details,
        nurse,
      },
      {
        date,
        details,
        nurse,
      },
    //   {
    //     date: '2020-01-05',
    //     details: '11091700',
    //     nurse: 3,
    //   },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="right">{row.name}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.details}</TableCell>
        <TableCell align="right">{row.nurse}</TableCell>
      </TableRow>
      <TableRow dir="rtl">
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" style={{ textAlign: 'right'}} gutterBottom component="div">
                הסטוריה
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">תאריך</TableCell>
                    <TableCell align="right">פרטים</TableCell>
                    <TableCell align="right">אחות</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" align="right">{historyRow.date}</TableCell>
                      <TableCell align="right">{historyRow.details}</TableCell>
                      <TableCell align="right">{historyRow.nurse}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
    nurse: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.number.isRequired,
        details: PropTypes.string.isRequired,
        nurse: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('האכלה',37,4.3,4.99),
  createData('החתלה',37,4.3,4.99),
  createData('אמבטיה',37,4.3,4.99),
  createData('חום',37,4.3,4.99),
  createData('צהבת',37,4.3,4.99), 
  createData('גובה ומשקל',37,4.3,4.99),
];

export default function CollapsibleTable() {
  return (
      <div>
         <NavTabs/>
    <TableContainer component={Paper} dir="rtl">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow >
            <TableCell />
              <TableCell align="right"> טיפול</TableCell>
              <TableCell align="right">תאריך</TableCell>
              <TableCell align="right">פרטים</TableCell>  
              <TableCell align="right" >אחות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
