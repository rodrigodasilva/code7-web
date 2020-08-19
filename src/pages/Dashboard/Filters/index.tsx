import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import Select from 'react-select';
import { debounce } from 'lodash';
import { OptionTypeBase as SelectOption } from 'react-select';
import CurrencyInput from 'react-number-format';

import { Spinner } from '../../../components/Spinner';

import { Container } from './styles';
import api from '../../../services/api';

interface Client {
  id: number;
  name: string;
}

interface FilterValue {
  client_id?: number | null;
  value_min?: number;
  value_max?: number;
  date?: string;
  reason?: string;
}

interface Filter {
  [key: string]: string | number;
}

interface FilterProps {
  onChange: (filter: Filter) => void;
  onReset: () => void;
  isLoading: boolean;
}

const Filters: React.FC<FilterProps> = ({ onChange, onReset, isLoading }) => {
  const [clientOptions, setClientOptions] = useState<SelectOption[]>([]);
  const [filterValues, setFilterValues] = useState<FilterValue>({
    client_id: null,
    value_min: 0,
    value_max: 0,
    date: '',
    reason: '',
  });

  useEffect(() => {
    async function loadClients(): Promise<void> {
      const response = await api.get('/clients');

      const formattedClientOptionsToSelect = response.data.map(
        (client: Client) => ({
          value: client.id,
          label: client.name,
        }),
      );

      setClientOptions(formattedClientOptionsToSelect);
    }

    loadClients();
  }, []);

  const handleSearchWithDebounce = useRef(
    debounce((filter: Filter) => {
      onChange(filter);
    }, 500),
  ).current;

  const handleChangeWithDebounce = useCallback(
    (filter: Filter) => {
      setFilterValues(state => ({ ...state, ...filter }));
      handleSearchWithDebounce(filter);
    },
    [handleSearchWithDebounce],
  );

  const handleSearch = useCallback(
    (filter: Filter) => {
      setFilterValues(state => ({ ...state, ...filter }));
      onChange(filter);
    },
    [onChange],
  );

  const handleChangeSelect = useCallback(
    (option: SelectOption) => {
      handleSearch({ client_id: option.value });
    },
    [handleSearch],
  );

  const clientSelected = useMemo(() => {
    return filterValues.client_id
      ? clientOptions.find(option => option.value === filterValues.client_id)
      : { value: '', label: '' };
  }, [clientOptions, filterValues.client_id]);

  const handleResetFilters = useCallback(() => {
    setFilterValues({
      client_id: null,
      value_min: 0,
      value_max: 0,
      date: '',
      reason: '',
    });

    onReset();
  }, [onReset]);

  const checkIfHaveActiveFilter = useMemo(() => {
    return (
      !!filterValues.client_id ||
      !!filterValues.value_min ||
      !!filterValues.value_max ||
      !!filterValues.date ||
      !!filterValues.reason
    );
  }, [filterValues]);

  return (
    <Container>
      <header>
        <h5>Filtrar por:</h5>
        {isLoading && <Spinner size={16} />}
        {checkIfHaveActiveFilter && (
          <button
            type="button"
            onClick={() => handleResetFilters()}
            title="Limpar filtro"
          >
            Limpar
          </button>
        )}
      </header>

      <fieldset>
        <legend>Cliente</legend>
        <Select
          options={clientOptions}
          placeholder="Selecione"
          classNamePrefix="react-select"
          onChange={option => {
            option
              ? handleChangeSelect(option)
              : handleChangeSelect({ value: '', label: '' });
          }}
          value={clientSelected}
        />
      </fieldset>

      <fieldset>
        <legend>Valor</legend>
        <CurrencyInput
          onValueChange={({ floatValue }) => {
            handleChangeWithDebounce({ value_min: Number(floatValue) });
          }}
          value={filterValues.value_min || ''}
          thousandSeparator="."
          decimalSeparator=","
          fixedDecimalScale
          decimalScale={2}
          prefix="R$ "
          placeholder="Valor mínimo"
        />

        <CurrencyInput
          onValueChange={({ floatValue }) => {
            handleChangeWithDebounce({ value_max: Number(floatValue) });
          }}
          value={filterValues.value_max || ''}
          thousandSeparator="."
          decimalSeparator=","
          fixedDecimalScale
          decimalScale={2}
          prefix="R$ "
          placeholder="Valor mínimo"
        />
      </fieldset>

      <fieldset>
        <legend>Data</legend>
        <input
          type="date"
          placeholder="Ex: 25/10/2020"
          onChange={e => handleSearch({ date: e.target.value })}
          value={filterValues.date}
        />
      </fieldset>

      <fieldset>
        <legend>Motivo</legend>
        <input
          placeholder="Ex: divida cartão de crédito"
          onChange={e => {
            handleChangeWithDebounce({ reason: e.target.value });
          }}
          value={filterValues.reason}
        />
      </fieldset>
    </Container>
  );
};

export default Filters;
