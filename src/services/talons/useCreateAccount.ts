import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { createCustomerGQL } from '../../gql/customer';

interface ActivePwdIcon {
  password?: boolean;
  password_confirm?: boolean;
}

export interface ValuesCreateAccount {
  firstname: string;
  lastname: string;
  gender: number;
  dateOfBirth: string;
  country: string;
  cpf: string;
  telephone: string;
  email: string;
  subscribe: boolean;
  password: string;
  password_confirm?: string;
}

interface onValueChangeProps {
  id: string;
  itemActive: string;
}

export const useCreateAccount = () => {
  const initialValues = {
    firstname: '',
    lastname: '',
    gender: 0,
    dateOfBirth: '',
    country: '',
    cpf: '',
    telephone: '',
    email: '',
    subscribe: false,
    password: '',
    password_confirm: ''
  };
  const [values, setValues] = useState<ValuesCreateAccount>(initialValues);
  const initialPwd = { password: false, password_confirm: false };
  const [activePwdIcon, setActivePwdIcon] = useState<ActivePwdIcon>(initialPwd);

  const { query, variables } = createCustomerGQL({ data: values });

  const [createCustomer] = useMutation(gql(query));

  const handleChange = useCallback(
    ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
      setValues(prevState => ({ ...prevState, [name]: value }));
    },
    [setValues]
  );

  const handleCheck = useCallback(
    ({ target: { checked, name } }: ChangeEvent<HTMLInputElement>) => {
      setValues(prevState => ({ ...prevState, [name]: checked }));
    },
    [setValues]
  );

  const handleClickPwd = useCallback(
    ({ target: { id } }: ChangeEvent<HTMLInputElement>) =>
      (id === 'password' || id === 'password_confirm') &&
      setActivePwdIcon(prevState => ({ ...prevState, [id]: !prevState[id] })),
    [setActivePwdIcon]
  );

  const onValueChange = useCallback(
    ({ id, itemActive }: onValueChangeProps) =>
      setValues(prevState => ({ ...prevState, [id]: itemActive })),
    [setValues]
  );

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    delete values.password_confirm;

    try {
      const response = await createCustomer({ variables });
      console.log('response', response);
    } catch (error) {
      console.log(`Unexpect Error on Mutation ${error}`);
    }
  };

  return {
    handleChange,
    handleCheck,
    handleSubmit,
    handleClickPwd,
    onValueChange,
    values,
    activePwdIcon
  };
};
