// library
import React from 'react';
import styled from 'styled-components';

// style
import { borderBox } from '../shared/style';

const Grid = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <GridStyle {...props}>{children}</GridStyle>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  opacity: 1,
  addstyle: () => {},
};

const GridStyle = styled.div`
  width: ${(props) =>
    props.width ? props.width : props.theme.size.defaultWidth};
  height: ${(props) => props.height};
  background: ${(props) =>
    props.bgColor &&
    `rgba(${props.theme.palette[props.bgColor]}, ${props.opacity})`};
  color: ${(props) =>
    props.color &&
    `rgba(${props.theme.palette[props.color]}, ${props.opacity})`};
  margin: ${(props) => props.margin};
  overflow: ${(props) => props.overflow};
  ${(props) => borderBox(props.radius, props.padding)};
  ${(props) => props.addstyle()}
  border: ${(props) => props.border};
`;
export default Grid;
