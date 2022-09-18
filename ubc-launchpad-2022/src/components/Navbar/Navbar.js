import React from 'react'
import { Nav, NavbarContainer} from './Navbar.styles'

export const Navbar = () => {
    return(
        <>
        <Nav>
            <NavbarContainer>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>

            </NavbarContainer>
        </Nav>
        </>
        
    )
}