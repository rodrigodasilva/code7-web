import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';

import Debt from '../../components/Debt';
import Header from '../../components/Header';
import ModalAddDebt from '../../components/ModalAddDebt';

import { Container, Filters, DebtsList } from './styles';
import api from '../../services/api';

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

interface Debt {
  id: string;
  reason: string;
  value: number;
  date: string;
  client: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
}

const Dashboard: React.FC = () => {
  const [debts, setDebts] = useState<Debt[]>([]);
  const [modalAddDebtIsOpen, setModalAddDebtIsOpen] = useState(false);

  useEffect(() => {
    async function loadDebts(): Promise<void> {
      const response = await api.get('/debts');
      setDebts(response.data);
    }

    loadDebts();
  }, []);

  const handleAddDebt = useCallback(async (debt: Omit<Debt, 'id'>): Promise<
    void
  > => {
    try {
      const response = await api.post('/debts', debt);

      setDebts(state => [response.data, ...state]);
    } catch (err) {
      console.log(err);
    } finally {
      setModalAddDebtIsOpen(false);
    }
  }, []);

  const handleChangeFilter = useCallback(
    (name: string, value: string | number) => {
      console.log(name, value);
    },
    [],
  );

  return (
    <>
      <Header openModal={() => setModalAddDebtIsOpen(true)} />
      {modalAddDebtIsOpen && (
        <ModalAddDebt
          isOpen={modalAddDebtIsOpen}
          onClose={() => setModalAddDebtIsOpen(false)}
          onSubmit={handleAddDebt}
        />
      )}

      <Container>
        <Filters>
          <header>
            <h5>Filtrar por:</h5>
            {/* {isLoading && <Spinner size={12} color="#fff" />} */}
          </header>

          <fieldset>
            <legend>Cliente</legend>
            <Select
              options={options}
              isClearable
              classNamePrefix="react-select"
            />
          </fieldset>

          <fieldset>
            <legend>Valor</legend>
            <input
              placeholder="Valor mínimo"
              onChange={e => handleChangeFilter('value_min', e.target.value)}
            />
            <input
              placeholder="Valor máximo"
              onChange={e => handleChangeFilter('value_max', e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Data</legend>
            <input
              type="date"
              placeholder="Ex: 25/10/2020"
              onChange={e => handleChangeFilter('date', e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Motivo</legend>
            <input
              placeholder="Ex: divida cartão de crédito"
              onChange={e => handleChangeFilter('reason', e.target.value)}
            />
          </fieldset>
        </Filters>

        <DebtsList data-testid="debts-list">
          {debts?.map(debt => (
            <Debt key={debt.id} debt={debt} />
          ))}
        </DebtsList>
      </Container>
    </>
  );
};

export default Dashboard;
