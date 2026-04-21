import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(250, 250, 248, 0.85);
  backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid #e8ede8;

  @media (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
`

const Logo = styled.a`
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--dark);

  span {
    color: var(--sage);
  }
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.5rem;

  @media (max-width: 600px) {
    gap: 1.2rem;
  }
`

const NavLink = styled.a`
  font-size: 0.92rem;
  color: #666;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: var(--sage);
  }
`

export default function Navbar() {
  return (
    <Nav>
      <Logo href="#home">LINA</Logo>
      <NavLinks>
        <li><NavLink href="#about">About</NavLink></li>
        <li><NavLink href="#projects">Projects</NavLink></li>
        <li><NavLink href="#contact">Contact</NavLink></li>
      </NavLinks>
    </Nav>
  )
}