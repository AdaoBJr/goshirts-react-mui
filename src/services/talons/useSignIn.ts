import { useState, useCallback, ChangeEvent, SyntheticEvent } from 'react';
import { useMutation, gql } from '@apollo/client';
import { signInCustomerGQL } from '../../gql/customer';

interface ActivePwdIcon {
  password: boolean;
}

export interface valuesSignIn {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const initialData = { email: '', password: '' };
  const [values, setValues] = useState<valuesSignIn>(initialData);
  const [activePwdIcon, setActivePwdIcon] = useState<ActivePwdIcon>({ password: false });

  const { query, variables } = signInCustomerGQL({ data: values });

  const [signInCustomer] = useMutation(gql(query));

  const handleChange = useCallback(
    ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
      setValues(prevState => ({ ...prevState, [name]: value }));
    },
    [setValues]
  );

  const handleClickPwd = useCallback(
    ({ target: { id } }: ChangeEvent<HTMLInputElement>) =>
      id === 'password' &&
      setActivePwdIcon(prevState => ({ ...prevState, [id]: !prevState[id] })),
    [setActivePwdIcon]
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await signInCustomer({ variables });
      console.log('response', response);
    } catch (error) {
      console.log(`Unexpect Error on Mutation ${error}`);
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleClickPwd,
    values,
    activePwdIcon
  };
};
