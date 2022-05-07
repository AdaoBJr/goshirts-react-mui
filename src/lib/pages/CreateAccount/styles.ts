import { Grid, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GridContainer = styled(Grid, {
  name: 'CreateAccount',
  slot: 'container'
})(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  maxWidth: theme.breakpoints.values.lg
}));

export const FormContainer = styled('form', {
  name: 'CreateAccount',
  slot: 'form'
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.25rem'
}));

export const BoxWrapper = styled(Box, {
  name: 'Input',
  slot: 'wrapper'
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '1.25rem'
}));

export const InputText = styled(TextField, {
  name: 'Input',
  slot: 'text_item'
})(({ theme }) => {
  const {
    palette: { background }
  } = theme;

  return {
    fontSize: 16,
    textAlign: 'center',
    width: 60,
    height: 50,
    borderRadius: 4,
    backgroundColor: background.paper,
    '& .MuiInputBase-input': {
      fontSize: '1rem',
      textAlign: 'center'
    }
  };
});
