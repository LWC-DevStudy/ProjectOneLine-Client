// library
import React from 'react';

// style
import styled from 'styled-components';

const Text = ({ children, ...props }) => {
    return <Textstyle {...props}>{children}</Textstyle>
};

Text.defaultProps = {
    color: 'white',
    addstyle: () => {},
}

const Textstyle = styled.p`
    width: ${(props) => props.width};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
    line-height: ${(props) => props.lineHeight};
    text-indent: ${(props) => props.textIndent};
    font-weight: ${(props) => props.fontWeight};
    margin: ${(props) => props.margin};
    text-align: ${(props) => props.textAlign};
    word-break: break-all;
    white-space: pre-line;

    ${(props) => props.addstyle()};
`;

export default Text;