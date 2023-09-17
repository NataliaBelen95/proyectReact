import { Link } from "react-router-dom";
import styled from "styled-components"


export const NavBarContainer = styled.nav `
  width: 100%;
  height: 80px;
  position: sticky;
  top:0;
  z-index: 99;
  background-color:black;

`;
export const NavBarWrapper = styled.div `
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    
`;

export const Menu = styled.ul `
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 968px){
   
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 80px;
  left: ${({click})=> click ? 0 : "-100%" };
  flex-direction: column;
  transition:  0.5s all ease-in;
  background-color: black;


  

  }
 
`;




export const MenuItem = styled.li `
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Schibsted Grotesk";
  font-weight: 400;
  cursor: pointer;
 
 @media screen and (max-width: 968px) {
  width: 100%;
  height: 70px;

  
 }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  background-image: linear-gradient(
    transparent 0%,
    transparent 90%,
    orange 90%,
    orange 100%
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position: right;

  transition: background-size 300ms;

  &:hover{
  background-size: 100% 100%;
  background-position-x: left;
  }
`;


export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: "Schibsted Grostesk";
  font-size: 1.2rem;
  color: #f41b1b;


` ;

export const IconImg = styled.img `
  width: 50px;
`;


export const MenuHamburguer = styled.div `
  display: none;



@media screen and (max-width: 968px) {
  display: flex;
  color: orange;
  font-size: 1.5rem;


}


`;
