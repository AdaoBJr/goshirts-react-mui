import React from 'react';
import { Grid } from '@mui/material';

import { country, gender } from '../../../articles';
import { GridContainer, FormContainer, PaperWrapper, InputText } from './styles';
import { useCreateAccount } from '../../../services/talons';

export const CreateAccount: React.FC = () => {
  const { handleSubmit, handleChange, values } = useCreateAccount();

  return (
    <GridContainer>
      <PaperWrapper>
        <FormContainer onSubmit={handleSubmit} autoComplete="off" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputText
                id="firstname"
                name="firstname"
                variant="outlined"
                fullWidth
                inputProps={{
                  'data-testid': 'firstname',
                  value: values.firstname,
                  onChange: handleChange
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputText
                id="lastname"
                name="lastname"
                variant="outlined"
                fullWidth
                inputProps={{
                  'data-testid': 'lastname',
                  value: values.lastname,
                  onChange: handleChange
                }}
              />
            </Grid>
          </Grid>
        </FormContainer>
      </PaperWrapper>
    </GridContainer>
  );
};
