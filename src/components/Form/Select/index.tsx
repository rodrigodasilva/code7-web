import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';
import { MdInfoOutline } from 'react-icons/md';

import { Container, Select, ErrorMessage } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
}

const ReactSelect: React.FC<Props> = ({ name, label, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        theme={undefined}
        error={!!error}
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

export default ReactSelect;
