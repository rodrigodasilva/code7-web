import React, {
  useRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Modal from '../Modal';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Currency from '../Form/Currency';
import Button from '../Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Buttons } from './styles';
import api from '../../services/api';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface DebtForm {
  client_id: number;
  reason: string;
  value: number;
  date: string;
}

interface CreateDebt extends Omit<DebtForm, 'client_id'> {
  client: Client;
}

interface ModalProps {
  isOpen: boolean;
  onClose(): void;
  onSubmit: (debt: CreateDebt) => void;
}

const ModalAddDebt: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [clients, setClients] = useState<Client[]>([]);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadClients(): Promise<void> {
      const response = await api.get('/clients');

      setClients(response.data);
    }

    loadClients();
  }, []);

  const clientsOptionsToSelect = useMemo(() => {
    return clients.map(client => ({ value: client.id, label: client.name }));
  }, [clients]);

  const handleSubmit = useCallback(
    async (data: DebtForm) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          client_id: Yup.string().required('Cliente é obrigatório'),
          reason: Yup.string().required('Motivo é obrigatória'),
          value: Yup.string().required('Valor é obrigatório'),
          date: Yup.string().required('Data é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        const client = clients.find(
          findClient => findClient.id === data.client_id,
        );

        if (!client) return;

        const { name, phone, id, email } = client;
        const { date, reason, value } = data;

        const createDebt = {
          reason,
          date,
          value,
          client: { id, name, email, phone },
        };

        onSubmit(createDebt);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [onSubmit, clients],
  );

  return (
    <Modal isOpen={isOpen} title="Adicionar Dívida" onClose={onClose}>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Select
          name="client_id"
          label="Cliente"
          options={clientsOptionsToSelect}
          isClearable
        />
        <Input name="reason" label="Motivo" />
        <Currency name="value" label="Valor" />
        <Input name="date" label="Data" type="date" />

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

export default ModalAddDebt;
