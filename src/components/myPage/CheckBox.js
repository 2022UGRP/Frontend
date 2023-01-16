import React, {useState, useEffect} from "react";
import { Grid, Box, Button, FormGroup, Checkbox, FormControl, InputLabel, OutlinedInput, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#A4A4A4',
          '&.Mui-checked': {
            color: '#D34658'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#757575',
          backgroundColor: '#FFFFFF',
          '&.Mui-focused': {
            color: '#D34658'
          }
        }
      }
    }
  },
  palette: {
    secondary: { main: '#757575' },
    warning: { main: '#D34658' }
  },
});

const CheckBox = (props) => {
  const [bChecked, setChecked] = useState(false);
  const checkHandler = (e) => {
    props.checkedItemHandler(props.item);
  };

  useEffect(() => setChecked(props.isChecked[props.item]), [props.isChecked, props.item]);
  
  return (
    <ThemeProvider theme={theme}>
      <Checkbox 
        size=""
        sx={{height: '20px'}}
        checked={bChecked} 
        onChange={(e) => checkHandler(e)} 
      /> 
      <span>{props.item}</span>
    </ThemeProvider>
  );
}

export default CheckBox;