import styled from 'styled-components';

export const ToggleButton = styled.span`
display: block;

  font-weight: bold;
  font-family: monospace;
  font-size: 2.2rem;
  text-transform: uppercase;
  text-align: center;
  max-width: 75px;
  max-height: 75px;

  padding: 1rem;

  color: #ffffff;
  background: #0d4577;

  cursor: pointer;

  border-radius: 7px;
  transition: all 0.25s ease-out;

  &&:before {
    content: ' ';
    display: inline-block;
  
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
  
    vertical-align: middle;
    margin-right: .7rem;
    transform: translateY(-2px);
  
    transition: transform .2s ease-out;
  }
`;


export const InnerContent = styled.div`
background: lightblue;
border-bottom: 2.2px solid #fff;

border-bottom-left-radius: 7px;
border-bottom-right-radius: 7px;
padding: 1.5rem 1rem;
font-size: 2em;
`;

export const OuterContent = styled.div`
font-size: 32px;
color: #000000;
`;

export const CollapsableDivContainer = styled.div`
margin-bottom: 1.2rem 0;
max-height: 400px;
overflow: hidden;

transition: max-height .25s ease-in-out;


`;
