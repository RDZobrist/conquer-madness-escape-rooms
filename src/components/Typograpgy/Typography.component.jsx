import React from 'react';
import styled, { css } from 'styled-components';

const TypographyUI = styled.p`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'transparent'};
  color: ${(props) =>
    props.color ? props.color : 'black'};
  font-size: ${(props) => (props.size ? props.size : 22)}px;
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : 100};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)}px;
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : 0)}px;
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : 0}px;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : 0)}px;
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  margin-left: ${(props) => (props.ml ? props.ml : '50vw')}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
      flex-wrap: ${props.fWrap};
    `} 
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${(props) =>
    props.link &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.primary};
      font-size: ${(props) => props.theme.textMedium}px;
      font-weight: ${(props) => props.theme.fwBold};
    `}
`;

const Typography = (props) => {
  return <TypographyUI {...props} />;
};

export default Typography;
