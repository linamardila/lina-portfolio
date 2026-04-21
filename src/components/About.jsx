import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 7rem 3rem;
  background: linear-gradient(180deg, #FAFAF8 0%, #EEF3EE 100%);

  @media (max-width: 600px) {
    padding: 4rem 1.5rem;
  }
`

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`

const Left = styled.div``

const Right = styled.div``

const SectionLabel = styled.p`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--sage);
  font-weight: 600;
  margin-bottom: 0.75rem;
`

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--dark);
  letter-spacing: -0.02em;
  line-height: 1.1;
`

const Bio = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.9;
  margin-bottom: 1.2rem;
`

const SkillsTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sage);
  margin-bottom: 1.2rem;
`

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`

const Skill = styled.span`
  padding: 0.45rem 1.1rem;
  border: 1.5px solid var(--sage-mid);
  border-radius: 100px;
  font-size: 0.85rem;
  color: #444;
  background-color: #fff;
  transition: all 0.2s;

  &:hover {
    background-color: var(--sage);
    color: #fff;
    border-color: var(--sage);
  }
`

const skills = [
  'Figma', 'User Research', 'Wireframing', 'Prototyping',
  'User Testing', 'Design Systems', 'User Interface Design',
  'User Experience Design', 'Accessibility',
]

export default function About() {
  return (
    <Section id="about">
      <Inner>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Left>
            <SectionLabel>About Me</SectionLabel>
            <SectionTitle>Designer. Thinker. Problem Solver.</SectionTitle>
            <Bio>
              I'm in my final semester as a Digital Media B.A. student at the University of Central Florida,
              focusing on the Web & Interactive Media track and minoring in Psychology.
            </Bio>
            <Bio>
              I'm passionate about design systems, interaction, and understanding people — which is why I love UI/UX.
              It blends everything I'm interested in and gives me the perfect opportunity to create meaningful solutions.
            </Bio>
            <Bio>
              I was born in Bogotá, Colombia and moved to South Florida when I was three years old. Growing up in a
              multicultural environment shaped how I see the world and taught me the importance of designing with
              empathy and inclusivity.
            </Bio>
          </Left>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <Right>
            <SkillsTitle>Skills & Tools</SkillsTitle>
            <SkillsGrid>
              {skills.map((skill) => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </SkillsGrid>
          </Right>
        </motion.div>
      </Inner>
    </Section>
  )
}