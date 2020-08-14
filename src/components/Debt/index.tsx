import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';

import Button from '../Button';

import { Container, User, Debt, Buttons } from './styles';

interface DebtProps {
  id: string | number;
  date: string;
  value: number | string;
  reason: string;
  user: {
    id: string | number;
    name: string;
    email: string;
    phone: string;
  };
}

interface DebtContainerProps {
  debt: DebtProps;
}

const DebtContainer: React.FC<DebtContainerProps> = ({ debt }) => {
  return (
    <>
      <Container>
        <div className="mb-12">
          <User>
            <strong>{debt?.user?.name}</strong>

            <span>
              <MdEmail />
              {debt?.user?.email}
            </span>

            <span>
              <MdPhone /> {debt?.user?.phone}
            </span>
          </User>

          <Debt>
            <strong> {debt?.value}</strong>
            <span>{debt?.date}</span>
            <p>{debt?.reason}</p>
          </Debt>
        </div>

        <Buttons>
          <Button color="cancel">Deletar</Button>
          <Button>Editar</Button>
        </Buttons>
      </Container>
    </>
  );
};

export default DebtContainer;
