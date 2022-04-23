import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "100px")};
  background-color: #FCFCFC;
  display: flex;
  flex-direction: column;
  margin-bottom: 85vh;
 
  @media (min-width: 700px) {
    height: 80px;
  }
  
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  margin-top: 2.5%;
`;

export const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  margin-top: 1.5%;

`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  font-weight: bolder;
  margin-right: 5.5vw;
  a:active{
    color: indianred;
    text-decoration: underline;

  }

`;

export const NavbarLink = styled(Link)`
  color: hsla(240, 37%, 0%, 0.76);
  font-size: .95rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 17px;
  &.${props => props.activeClassName} {
    color: red;
  }
 
  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarAnchorLink = styled.a`
color: #000;
font-size: .95rem;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 17px;
&.${props => props.activeClassName} {
    color: red;
  }

@media (max-width: 700px) {
  display: none;
}
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &.${props => props.activeClassName} {
    color: red;
  }
`;
export const NavbarAnchorLinkExtended = styled.a`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &.${props => props.activeClassName} {
    color: red;
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: 150px;
  margin-top: 6.444vh;
  @media (max-width: 700px) {
    width: 75px;
    height: 75px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #000;
  margin-top: 1.5%;
  margin-right: 40px;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c7694a;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const CustomButtonContainer = styled.div`
width: '17.5vw';
  background-color: 'red';
 color:'#000';
  width: '17.5vw';
  
`;
export const YouTubeContainer = styled.div`
display: block;
margin-top: 10vh;
width: 100vw;
@media (max-width: 450px) {
  width: 0vw;
}

`;