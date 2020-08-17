import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { MdInfoOutline } from 'react-icons/md';

import { Container, ErrorMessage } from './styles';

interface Props {
  label?: string;
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <Container error={!!error}>
      <label htmlFor={fieldName}>{label}</label>

      <input
        ref={inputRef}
        id={fieldName}
        aria-label={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <ErrorMessage>
          <MdInfoOutline />
          {error}
        </ErrorMessage>
      )}
    </Container>
  );
};

export default Input;
