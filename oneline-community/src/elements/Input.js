// library
import React from 'react';
import styled from 'styled-components';

// style
import { borderBox } from '../shared/style';

const InputStyle = styled.input`
  width: ${(props) => props.width};
  background: ${(props) => props.bgColor};
  color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  ${(props) => borderBox(props.radius, props.padding)};
  line-height: 1.5;
  border: none;

  &::placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &::-webkit-input-placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &:-ms-input-placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &:focus {
    color: ${(props) => `rgb(${props.theme.palette.black})`};
    background: ${(props) => `rgb(${props.theme.palette.white})`};
    outline: none;

    &::placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }
    &::-webkit-input-placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }
    &:-ms-input-placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }
  }

  ${(props) => props.addstyle()};
`;

const Input = ({
  id,
  type,
  placeholder,
  value,
  changeEvent,
  keyPress,
  ...props
}) => {
  return (
    <InputStyle
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeEvent}
      onKeyPress={keyPress}
      {...props}
    />
  );
};

Input.defaultProps = {
  bgColor: 'none',
  type: 'text',
  color: 'black',
  width: '100%',
  fontSize: '14px',
  padding: '6px',
  keyPress: () => {},
  changeEvent: () => {},
  addstyle: () => {},
};

export default Input;
