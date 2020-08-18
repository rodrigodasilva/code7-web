import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { MdInfoOutline } from 'react-icons/md';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

import { Container, ErrorMessage } from './styles';

interface InputProps extends NumberFormatProps {
  label?: string;
  name: string;
}

interface InputRefInstance extends NumberFormat {
  floatValue: number;
}

const Currency: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<InputRefInstance>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.floatValue = defaultValue;
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: ref => {
        return ref.floatValue || '';
      },
      setValue: (ref, value: string) => {
        ref.floatValue = value;
      },
      clearValue: ref => {
        ref.floatValue = '';
        ref.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container error={!!error}>
      <label htmlFor={fieldName}>{label}</label>

      <NumberFormat
        ref={inputRef}
        id={fieldName}
        aria-label={fieldName}
        defaultValue={defaultValue}
        onValueChange={({ floatValue }) => {
          if (inputRef.current)
            inputRef.current.floatValue = Number(floatValue);
        }}
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale
        decimalScale={2}
        prefix="R$ "
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

export default Currency;
