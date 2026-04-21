import styled from 'styled-components'
import { motion } from 'framer-motion'
import striveImg from '../assets/strive.png'
import nudgeImg from '../assets/nudge.png'
import quizImg from '../assets/quiz-app.png'

// eslint-disable-next-line no-unused-vars
const Inner = styled.div`
  padding: 7rem 3rem;
  background-color: var(--cream);
  max-width: 100%;

  @media (max-width: 600px) {
    padding: 4rem 1.5rem;
  }
`

// eslint-disable-next-line no-unused-vars
const ContentWrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

// eslint-disable-next-line no-unused-vars
const SectionLabel = styled.p`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--sage);
  font-weight: 600;
  margin-bottom: 0.75rem;
`

// eslint-disable-next-line no-unused-vars
const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--dark);
  letter-spacing: -0.02em;
`

// eslint-disable-next-line no-unused-vars
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`

// eslint-disable-next-line no-unused-vars
const Card = styled(motion.div)`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e8ede8;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 12px 40px rgba(124, 154, 126, 0.15);
    transform: translateY(-4px);
  }
`

// eslint-disable-next-line no-unused-vars
const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: var(--sage-light);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`

// eslint-disable-next-line no-unused-vars
const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
`

// eslint-disable-next-line no-unused-vars
const ProjectName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark);
`

// eslint-disable-next-line no-unused-vars
const ProjectDesc = styled.p`
  font-size: 0.92rem;
  color: var(--gray);
  line-height: 1.7;
  flex: 1;
`

// eslint-disable-next-line no-unused-vars
const ProjectLink = styled.a`
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--sage);
  margin-top: 0.5rem;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`

const projects = [
  {
    image: striveImg,
    name: 'Strive',
    description: 'An exercise tracker that lets users track push ups, running, planks, and weight lifting all in one place.',
    link: 'https://github.com/linamardila/exercise-tracker',
  },
  {
    image: nudgeImg,
    name: 'Nudge',
    description: 'A to-do list app that lets users add tasks, delete them, and view completed items with a clean minimal interface.',
    link: 'https://github.com/linamardila/nudge',
  },
  {
    image: quizImg,
    name: 'Quiz App',
    description: 'A simple interactive quiz app featuring 5 questions with instant feedback and a clean user experience.',
    link: 'https://github.com/linamardila/QuizApp.git',
  },
]

export default function Projects() {
  return (
    <Inner id="projects">
      <ContentWrap>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionLabel>My Work</SectionLabel>
          <SectionTitle>Featured Projects</SectionTitle>
        </motion.div>

        <Grid>
          {projects.map((project, index) => (
            <Card
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <CardImage>
                <img src={project.image} alt={project.name} />
              </CardImage>
              <CardBody>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDesc>{project.description}</ProjectDesc>
                {project.link ? (
                  <ProjectLink href={project.link} target="_blank" rel="noreferrer">
                    View on GitHub →
                  </ProjectLink>
                ) : (
                  <ProjectLink as="span" style={{ color: '#aaa' }}>
                    Coming Soon
                  </ProjectLink>
                )}
              </CardBody>
            </Card>
          ))}
        </Grid>
      </ContentWrap>
    </Inner>
  )
}