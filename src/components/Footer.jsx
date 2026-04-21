import styled from 'styled-components'

const FooterWrapper = styled.footer`
  padding: 2rem 3rem;
  border-top: 1px solid #efefed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #FAFAF8;

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
    flex-direction: column;
    text-align: center;
  }
`

const Left = styled.p`
  font-size: 0.88rem;
  color: #888;
`

const Right = styled.div`
  display: flex;
  gap: 1.5rem;
`

const FooterLink = styled.a`
  font-size: 0.88rem;
  color: #888;
  transition: color 0.2s;

  &:hover {
    color: #1a1a1a;
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <Left>© {new Date().getFullYear()} Lina Ardila. All rights reserved.</Left>
      <Right>
        <FooterLink href="https://github.com/linamardila" target="_blank" rel="noreferrer">GitHub</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/lina-ardila-17141b243" target="_blank" rel="noreferrer">LinkedIn</FooterLink>
        <FooterLink href="#home">Back to Top</FooterLink>
      </Right>
    </FooterWrapper>
  )
}