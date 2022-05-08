import { Grid, TextField, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GridContainer = styled(Grid, {
  name: 'CreateAccount',
  slot: 'container'
})(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'start',
  marginTop: '1rem',
  width: '100vw',
  height: '100vh'
}));

export const PaperWrapper = styled(Paper, {
  name: 'Input',
  slot: 'wrapper'
})(({ theme }) => ({
  padding: '1rem 1.5rem 2rem 1.5rem',
  maxWidth: '400px'
}));

export const FormContainer = styled('form', {
  name: 'CreateAccount',
  slot: 'form'
})(({ theme }) => ({
  display: 'grid'
}));

export const InputText = styled(TextField, {
  name: 'Input',
  slot: 'text_item'
})(({ theme }) => {
  const {
    palette: { background, secondary }
  } = theme;

  return {
    fontSize: 16,
    textAlign: 'center',
    height: '40px',
    padding: 0,
    backgroundColor: background.paper,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: secondary.main
    }
  };
});
