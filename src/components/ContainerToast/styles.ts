import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const CustomContainerToast = styled(ToastContainer)`
  .Toastify__toast {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    padding: 8px 20px;
    border-radius: 3px;
  }

  .Toastify__toast-container {
  }

  .Toastify__toast--success {
    background: #d4edda;
    color: #155724;

    .Toastify__close-button {
      color: #155724;
    }
  }

  .Toastify__toast--error {
    background: #f5c6cb;
    color: #721c24;

    .Toastify__close-button {
      color: #721c24;
    }
  }

  .Toastify__toast--warning {
    background: #ffeeba;
    color: #856404;

    .Toastify__close-button {
      color: #856404;
    }
  }

  .Toastify__toast-body {
    margin: auto 0px;
    font-size: 16px;
    flex: 1 1 0%;
  }
`;
