import React, { useCallback } from 'react';
import Select from 'react-select';

import Debt from '../../components/Debt';
import DefaultLayout from '../_layouts/default';

import { Container, Filters, DebtsList } from './styles';

const debts = [
  {
    id: 1,
    date: '20 de agosto de 2020',
    value: 'R$ 1.000,00',
    reason: 'Cartão de crédito asssssssssssssss ssssssssssssssssssssda a      ',
    user: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  },
  {
    id: 2,
    date: '20 de agosto de 2020',
    value: 'R$ 2.500,00',
    reason: 'Emprestino Teste',
    user: {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
  },
  {
    id: 3,
    date: '20 de agosto de 2020',
    value: 'R$ 2.500,00',
    reason: 'Emprestino',
    user: {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
  },
  {
    id: 4,
    date: '20 de agosto de 2020',
    value: 'R$ 2.500,00',
    reason: 'Emprestino',
    user: {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
  },
];

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

const Dashboard: React.FC = () => {
  const handleChange = useCallback((name: string, value: string | number) => {
    console.log(name, value);
  }, []);

  return (
    <DefaultLayout>
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
              onChange={e => handleChange('value_min', e.target.value)}
            />
            <input
              placeholder="Valor máximo"
              onChange={e => handleChange('value_max', e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Data</legend>
            <input
              type="date"
              placeholder="Ex: 25/10/2020"
              onChange={e => handleChange('date', e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Motivo</legend>
            <input
              placeholder="Ex: divida cartão de crédito"
              onChange={e => handleChange('reason', e.target.value)}
            />
          </fieldset>
        </Filters>

        <DebtsList>
          {debts?.map(debt => (
            <Debt key={debt.id} debt={debt} />
          ))}
        </DebtsList>
      </Container>
    </DefaultLayout>
  );
};

export default Dashboard;
