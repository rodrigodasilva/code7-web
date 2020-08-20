import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Input from '../../components/Form/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigratório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);

        toast.success('Cadastro realizado com sucesso!');
        setLoading(false);
        history.push('/');
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error(
          err?.response?.data?.message || 'Erro de comunicação com o servidor',
        );
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <h1>Faça seu cadastro</h1>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="name" label="Nome" />
          <Input name="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />

          <Button type="submit" isLoading={loading}>
            Cadastrar
          </Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
