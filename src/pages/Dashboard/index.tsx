import React, { useCallback, useEffect, useState } from 'react';

import Debt from '../../components/Debt';
import Header from '../../components/Header';
import ModalAddDebt from '../../components/ModalAddDebt';
import ModalEditDebt from '../../components/ModalEditDebt';
import ModalDeleteDebt from '../../components/ModalDeleteDebt';
import Pagination from '../../components/Pagination';

import Filters from './Filters';

import api from '../../services/api';

import { Container, DebtsList, Message } from './styles';

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

interface Filters {
  page: number;
  per_page?: number;
  client_id?: number | null;
  value_min?: number | null;
  value_max?: number | null;
  date?: string;
  reason?: string;
}

interface Filter {
  [key: string]: string | number;
}

const Dashboard: React.FC = () => {
  const [debts, setDebts] = useState<Debt[]>([]);
  const [modalAddDebtIsOpen, setModalAddDebtIsOpen] = useState(false);
  const [modalEditDebtIsOpen, setModalEditDebtIsOpen] = useState(false);
  const [edittingDebt, setEdittingDebt] = useState<Debt>({} as Debt);
  const [modalDeleteDebtIsOpen, setModalDeleteDebtIsOpen] = useState(false);
  const [delettingDebt, setDelettingDebt] = useState<Debt>({} as Debt);
  const [filters, setFilters] = useState<Filters>({
    page: 1,
    per_page: 6,
    client_id: null,
    value_min: null,
    value_max: null,
    date: '',
    reason: '',
  });
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDebts(): Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('/debts', { params: { ...filters } });
        setDebts(response.data);

        const { headers } = response;
        setTotalPages(Number(headers['x-total-page']));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadDebts();
  }, [filters]);

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

  const handleLoadModalEditDebt = useCallback((debt: Debt): void => {
    setModalEditDebtIsOpen(true);
    setEdittingDebt(debt);
  }, []);

  const handleUpdateDebt = useCallback(
    async (debt: Debt): Promise<void> => {
      try {
        const response = await api.put('/debts', debt);

        const findIndexUpdatedDebt = debts.findIndex(
          findDebt => findDebt.id === debt.id,
        );

        const newArrayDebts = debts;

        newArrayDebts[findIndexUpdatedDebt] = response.data;

        setDebts(newArrayDebts);
      } catch (err) {
        console.log(err);
      } finally {
        setModalEditDebtIsOpen(false);
      }
    },
    [debts],
  );

  const handleLoadModalDeleteDebt = useCallback((debt: Debt): void => {
    setModalDeleteDebtIsOpen(true);
    setDelettingDebt(debt);
  }, []);

  const handleDeleteDebt = useCallback(
    async (id: string): Promise<void> => {
      try {
        await api.delete(`/debts/${id}`);

        const findIndexDeletedDebt = debts.findIndex(
          findDebt => findDebt.id === id,
        );

        const newArrayDebts = debts;

        delete newArrayDebts[findIndexDeletedDebt];

        setDebts(newArrayDebts);
      } catch (err) {
        console.log(err);
      } finally {
        setModalDeleteDebtIsOpen(false);
      }
    },
    [debts],
  );

  const handleChangeFilter = useCallback((filter: Filter) => {
    setFilters(state => ({ ...state, page: 1, ...filter }));
  }, []);

  const handleChangePage = useCallback((page: number) => {
    setFilters(state => ({ ...state, page }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters({
      page: 1,
      per_page: 6,
      client_id: null,
      value_min: null,
      value_max: null,
      date: '',
      reason: '',
    });
  }, []);

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
      {modalEditDebtIsOpen && (
        <ModalEditDebt
          debt={edittingDebt}
          isOpen={modalEditDebtIsOpen}
          onClose={() => setModalEditDebtIsOpen(false)}
          onSubmit={handleUpdateDebt}
        />
      )}
      {modalDeleteDebtIsOpen && (
        <ModalDeleteDebt
          debt={delettingDebt}
          isOpen={modalDeleteDebtIsOpen}
          onClose={() => setModalDeleteDebtIsOpen(false)}
          onSubmit={handleDeleteDebt}
        />
      )}

      <Container>
        <Filters
          onChange={filter => handleChangeFilter(filter)}
          onReset={() => handleResetFilters()}
          isLoading={loading && !!debts.length}
        />

        <DebtsList>
          {!loading && !debts.length && (
            <Message>Nenhum registro encontrado</Message>
          )}

          {loading && !debts.length ? (
            <Message>Carregando...</Message>
          ) : (
            <>
              {debts?.map(debt => (
                <Debt
                  key={debt.id}
                  debt={debt}
                  handleEdit={values => handleLoadModalEditDebt(values)}
                  handleDelete={values => handleLoadModalDeleteDebt(values)}
                />
              ))}

              {!!debts.length && (
                <Pagination
                  currentPage={filters.page}
                  totalPage={totalPages}
                  onChange={(page: number) => handleChangePage(page)}
                />
              )}
            </>
          )}
        </DebtsList>
      </Container>
    </>
  );
};

export default Dashboard;
