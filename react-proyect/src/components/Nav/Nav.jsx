import React from "react"
import { useState } from "react"
import { IconImg, IconLogo, Menu, MenuHamburguer, MenuItem, NavBarContainer, NavBarWrapper, NavLink } from "../../styles/Nav.style"
import IconShop from "../../assets/imagenes/coffes/icon/iconShop.png"
import {HiMenuAlt1} from "react-icons/hi"
import { Link } from "react-router-dom"



const Nav = () => {


let links  = [{
    name: "Inicio",
    route: "/",

},

{
    name: "Sobre Nosotros",
    route:"/about"
}, 
{
    name: "Contacto",
    route:"/contact"
},
{
  name: "Mis Productos",
  route:"/myCart",

}

]


 const [click, setClick] = useState(false)
 const ChangeClick = () =>{
   setClick(!click)
   console.log(click);


 }

 const closeMenu = () => {
    setClick(false);
  }

return (
    

    <NavBarContainer>
        <NavBarWrapper>
            <IconLogo><Link to = "/"><IconImg src={IconShop}></IconImg></Link>
            </IconLogo>

            <MenuHamburguer onClick={()=> ChangeClick()}>
              <HiMenuAlt1 size={"2em"}/>
            </MenuHamburguer>
            
            <Menu isClicked= {click}>
               {links.map(link=> (
              
                    <MenuItem key={link.name}><NavLink to={link.route} onClick={closeMenu} >{link.name}</NavLink>
                    </MenuItem>

                
               
               ))} 

              
               </Menu>
        
        </NavBarWrapper>
        </NavBarContainer>
        
)


}

export default Nav