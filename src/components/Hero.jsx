import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
  max-width: 960px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 600px) {
    padding: 0 1.5rem;
  }
`

const Blob = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #C8D8C8 0%, transparent 70%);
  border-radius: 50%;
  top: 10%;
  right: -100px;
  z-index: -1;
  opacity: 0.5;
`

const Greeting = styled.p`
  font-size: 0.9rem;
  color: var(--sage);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Name = styled.h1`
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 800;
  line-height: 1.0;
  margin-bottom: 1.5rem;
  color: var(--dark);
  letter-spacing: -0.02em;
`

const Accent = styled.span`
  color: var(--sage);
`

const Tagline = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--gray);
  max-width: 520px;
  line-height: 1.8;
  margin-bottom: 3rem;
`

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const PrimaryButton = styled.a`
  padding: 0.9rem 2.2rem;
  background-color: var(--sage);
  color: #fff;
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background-color: #6a8a6c;
    transform: translateY(-2px);
  }
`

const SecondaryButton = styled.a`
  padding: 0.9rem 2.2rem;
  border: 1.5px solid #ccc;
  border-radius: 100px;
  font-size: 0.95rem;
  color: var(--dark);
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--sage);
    color: var(--sage);
    transform: translateY(-2px);
  }
`

export default function Hero() {
  return (
    <Section id="home">
      <Blob />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Greeting>Hi there! I'm</Greeting>
        <Name>Lina<br /><Accent>Ardila</Accent></Name>
        <Tagline>UX/UI Designer & UCF Student crafting thoughtful, people-centered digital experiences.</Tagline>
        <ButtonRow>
          <PrimaryButton href="#projects">View My Work</PrimaryButton>
          <SecondaryButton href="#contact">Get In Touch</SecondaryButton>
        </ButtonRow>
      </motion.div>
    </Section>
  )
}