import React from 'react';

import { country, gender } from '../../../articles';
import { GridContainer, FormContainer, BoxWrapper, InputText } from './styles';
import { useCreateAccount } from '../../../services/talons';

export const CreateAccount: React.FC = () => {
  const { handleSubmit, handleChange, values } = useCreateAccount();

  return (
    <GridContainer container spacing={4} sx={{ margin: { xs: 'inherint', md: 'auto' } }}>
      <FormContainer onSubmit={handleSubmit} autoComplete="off" noValidate>
        <BoxWrapper>
          <InputText
            id="firstname"
            name="firstname"
            variant="outlined"
            inputProps={{
              'data-testid': 'firstname',
              value: values.firstname,
              onChange: handleChange
            }}
          />
          <InputText
            id="lastname"
            name="lastname"
            variant="outlined"
            inputProps={{
              'data-testid': 'lastname',
              value: values.lastname,
              onChange: handleChange
            }}
          />
        </BoxWrapper>
      </FormContainer>
    </GridContainer>
  );
};
