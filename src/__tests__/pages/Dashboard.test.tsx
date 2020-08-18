import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';

import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';

import Dashboard from '../../pages/Dashboard';

const apiMock = new AxiosMock(api);

describe('Dashboard', () => {
  it('should be able to list the debts from api', async () => {
    apiMock.onGet('debts').reply(200, [
      {
        id: 1,
        value: 100,
        reason: 'Reason 1',
        date: '2020-08-19',
        client_id: 1,
        client: {
          id: 1,
          name: 'Client 1',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
        },
        created_at: '2020-08-18T14:08:57.813Z',
        updated_at: '2020-08-18T14:08:57.813Z',
      },
      {
        id: 2,
        value: 200,
        reason: 'Reason 2',
        date: '2020-08-18T03:00:00.000Z',
        client_id: 2,
        client: {
          id: 2,
          name: 'Client 2',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
        },
        created_at: '2020-08-18T14:05:25.482Z',
        updated_at: '2020-08-18T14:05:25.482Z',
      },
      {
        id: 3,
        value: 200,
        reason: 'Reason 3',
        date: '2020-08-18',
        client_id: 3,
        client: {
          id: 3,
          name: 'Client 3',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
        },
        created_at: '2020-08-18T13:59:39.893Z',
        updated_at: '2020-08-18T13:59:39.893Z',
      },
    ]);

    render(<Dashboard />);

    await waitFor(() => expect(screen.getByText('Client 1')).toBeTruthy());

    expect(screen.getByText('Client 1')).toBeTruthy();
    expect(screen.getByText('Reason 1')).toBeTruthy();
    expect(screen.getByTestId('cancel-debt-1')).toBeTruthy();
    expect(screen.getByTestId('edit-debt-1')).toBeTruthy();

    expect(screen.getByText('Client 2')).toBeTruthy();
    expect(screen.getByText('Reason 2')).toBeTruthy();
    expect(screen.getByTestId('cancel-debt-2')).toBeTruthy();
    expect(screen.getByTestId('edit-debt-2')).toBeTruthy();

    expect(screen.getByText('Client 3')).toBeTruthy();
    expect(screen.getByText('Reason 3')).toBeTruthy();
    expect(screen.getByTestId('cancel-debt-3')).toBeTruthy();
    expect(screen.getByTestId('edit-debt-3')).toBeTruthy();
  });
});
