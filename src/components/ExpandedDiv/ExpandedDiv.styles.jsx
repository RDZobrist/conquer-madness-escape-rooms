import styled from 'styled-components';

export const ToggleButton = styled.span`
display: block;
  font-weight: bold;
  font-family: monospace;
  font-size: 2.2rem;
  text-transform: uppercase;
  text-align: center;
  max-width: 100vw;
  max-height: 400px;
  padding: .5rem;
  color: indianred;
  background: dodgerblue;
  cursor: pointer;
  border-radius: 7px;
  transition: all 0.45s ease-out;

  &&:after {
    content: '';
    display: inline-block;
  
    border-top: 12.5px solid transparent;
    border-bottom: 12.5px solid transparent;
    border-left: 12.5px solid currentColor;
  
    vertical-align: middle;
    margin-left: 2.7rem;
    margin-top: 20px;
    transform: translateY(-12px);
  
    transition: transform .2s ease-out;
  }
`;


export const InnerContent = styled.div`
background: lightblue;
border-bottom: .92px solid #0d4577;
border-bottom-left-radius: 7px;
border-bottom-right-radius: 7px;
padding: 1.5rem 1rem;
font-size: 2em;
`;

export const OuterContent = styled.div`
font-size: 32px;
color: #fff;
`;

export const CollapsableDivContainer = styled.div`
margin-bottom: 1.2rem 0;
max-height: 400px;
overflow: hidden;

transition: max-height .25s ease-in-out;


`;
