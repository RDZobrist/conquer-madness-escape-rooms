import styled, { css } from 'styled-components';

const subColor = 'indianred';
const mainColor = '#0d4577';

const shrinkLabelStyles = css`
  top: -2rem;
  font-size: 20px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
export const TextArea = styled.textarea`
width: 75%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid ${mainColor};
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 1.25rem;
  line-height: 30px;
  letter-spacing: .725px;
  resize: none;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: #000;
  font-size: 1.75rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 35vw;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #000;
  margin: 30px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${mainColor};
  font-size: 22px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 15px;
  color: pink;
  transition: 300ms ease all;
  margin-bottom: 30px;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;