import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Modal from '../Modal';
import Input from '../Form/Input';
import Button from '../Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Buttons } from './styles';

export interface ModalDebtsProps {
  isOpen: boolean;
  title: string;
  onClose(): void;
}

const options = [
  {
    value: 1,
    label: 'Leanne Graham',
  },
  {
    value: 2,
    label: 'Ervin Howell',
  },
  {
    value: 3,
    label: 'Clementine Bauch',
  },
  {
    value: 4,
    label: 'Patricia Lebsack',
  },
  {
    value: 5,
    label: 'Chelsey Dietrich',
  },
  {
    value: 6,
    label: 'Mrs. Dennis Schulist',
  },
  {
    value: 7,
    label: 'Kurtis Weissnat',
  },
  {
    value: 8,
    label: 'Nicholas Runolfsdottir V',
  },
  {
    value: 9,
    label: 'Glenna Reichert',
  },
  {
    value: 10,
    label: 'Clementina DuBuque',
  },
];

interface DebtsFormData {
  client: string;
  reason: string;
  value: string;
  date: string;
}

const ModalDebts: React.FC<ModalDebtsProps> = ({ isOpen, title, onClose }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DebtsFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        client: Yup.string().required('Cliente é obrigatório'),
        reason: Yup.string().required('Motivo é obrigatória'),
        value: Yup.string().required('Valor é obrigatório'),
        date: Yup.string().required('Data é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      console.log({
        user: data.client,
        reason: data.reason,
        value: data.value,
        date: data.date,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input name="client" label="Cliente" />
        <Input name="reason" label="Motivo" />
        <Input name="value" label="Valor" />
        <Input name="date" label="Data" />

        <Buttons>
          <Button type="button" color="cancel" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">Adicionar</Button>
        </Buttons>
      </Form>
    </Modal>
  );
};

export default ModalDebts;
