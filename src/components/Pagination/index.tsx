import React from 'react';

import { Container } from './styles';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPage,
  currentPage,
  onChange,
}) => {
  return (
    <Container>
      <button
        type="button"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Anterior
      </button>

      <span>
        {currentPage} de {totalPage}
      </span>

      <button
        type="button"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Próxima →
      </button>
    </Container>
  );
};

export default Pagination;
