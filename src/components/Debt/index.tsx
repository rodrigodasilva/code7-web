import React, { useMemo, useCallback } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Button from '../Button';

import { Container, Client, Debt, Buttons } from './styles';

interface DebtProps {
  id: string;
  date: string;
  value: number;
  reason: string;
  client: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
}

interface DebtContainerProps {
  debt: DebtProps;
  handleEdit: (debt: DebtProps) => void;
  handleDelete?: (id: string) => {};
}

const DebtContainer: React.FC<DebtContainerProps> = ({
  debt,
  handleEdit,
  handleDelete,
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

  const handleEditDebt = useCallback(() => {
    handleEdit(debt);
  }, [debt, handleEdit]);

  return (
    <>
      <Container>
        <div className="mb-12">
          <Client>
            <strong>{debt?.client?.name}</strong>

            <span>
              <MdEmail />
              {debt?.client?.email}
            </span>

            <span>
              <MdPhone /> {debt?.client?.phone}
            </span>
          </Client>

          <Debt>
            <strong> {formatValue}</strong>
            <span>{formatDate}</span>
            <p>{debt?.reason}</p>
          </Debt>
        </div>

        <Buttons>
          <Button color="cancel" data-testid={`cancel-debt-${debt.id}`}>
            Deletar
          </Button>
          <Button data-testid={`edit-debt-${debt.id}`} onClick={handleEditDebt}>
            Editar
          </Button>
        </Buttons>
      </Container>
    </>
  );
};

export default DebtContainer;
