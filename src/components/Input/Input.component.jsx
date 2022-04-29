import React from 'react';
 
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  TextArea
} from './Input.styles';

const FormInput = ({ handleChange, label, textArea, ...props }) => (
  <GroupContainer style={{marginTop: '2vh'}}>
    {textArea?<TextArea onChange={handleChange} required />:
    <FormInputContainer onChange={handleChange} {...props} />}
    {label ? (
      <FormInputLabel className={'shrink'}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;