import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Modal from '../Modal';

import Button from '../Button';

import { Container, Buttons } from './styles';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface Debt {
  id: string;
  reason: string;
  value: number;
  date: string;
  client: Client;
}

interface ModalProps {
  isOpen: boolean;
  debt: Debt;
  onClose(): void;
  onSubmit: (id: string) => void;
}

const ModalDeleteDebt: React.FC<ModalProps> = ({
  debt,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const formatValue = useMemo(() => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(debt.value);
  }, [debt.value]);

  const formatDate = useMemo(() => {
    return format(parseISO(debt.date), "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });
  }, [debt.date]);

  return (
    <Modal isOpen={isOpen} title="Deseja realmente deletar?" onClose={onClose}>
      <Container>
        <strong>{debt.client.name}</strong>
        <strong>{formatValue}</strong>
        <span>{formatDate}</span>
        <span>{debt.reason}</span>

        <Buttons>
          <Button type="button" color="clean" onClick={onClose}>
            Cancelar
          </Button>

          <Button
            type="button"
            color="danger"
            onClick={() => onSubmit(debt.id)}
          >
            Deletar
          </Button>
        </Buttons>
      </Container>
    </Modal>
  );
};

export default ModalDeleteDebt;
