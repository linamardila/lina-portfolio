import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Section = styled.section`
  padding: 7rem 3rem;
  background: linear-gradient(180deg, #EEF3EE 0%, #FAFAF8 100%);

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
  margin-bottom: 1rem;
  color: var(--dark);
  letter-spacing: -0.02em;
  line-height: 1.1;
`

const Subtitle = styled.p`
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 2rem;
`

const SocialTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sage);
  margin-bottom: 1rem;
`

const SocialRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const SocialLink = styled.a`
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: var(--sage);
  }
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.9rem 1.2rem;
  border: 1.5px solid ${({ $error }) => ($error ? '#e05c5c' : '#ddd')};
  border-radius: 12px;
  font-size: 0.95rem;
  outline: none;
  background: #fff;
  transition: border-color 0.2s;
  font-family: inherit;

  &:focus {
    border-color: var(--sage);
  }
`

const Textarea = styled.textarea`
  padding: 0.9rem 1.2rem;
  border: 1.5px solid ${({ $error }) => ($error ? '#e05c5c' : '#ddd')};
  border-radius: 12px;
  font-size: 0.95rem;
  outline: none;
  resize: vertical;
  min-height: 140px;
  background: #fff;
  transition: border-color 0.2s;
  font-family: inherit;

  &:focus {
    border-color: var(--sage);
  }
`

const ErrorMsg = styled.p`
  font-size: 0.8rem;
  color: #e05c5c;
  margin-top: -0.4rem;
`

const SubmitButton = styled.button`
  padding: 0.9rem 2.2rem;
  background-color: var(--sage);
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
  font-family: inherit;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background-color: #6a8a6c;
    transform: translateY(-2px);
  }
`

const SuccessMsg = styled(motion.p)`
  font-size: 0.92rem;
  color: var(--sage);
  font-weight: 500;
`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email.'
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <Section id="contact">
      <Inner>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Left>
            <SectionLabel>Contact</SectionLabel>
            <SectionTitle>Let's Work Together</SectionTitle>
            <Subtitle>
              Have a project in mind or just want to say hi?
              I'd love to hear from you!
            </Subtitle>
            <SocialTitle>Find Me Online</SocialTitle>
            <SocialRow>
              <SocialLink href="https://github.com/linamardila" target="_blank" rel="noreferrer">
                → GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/lina-ardila-17141b243" target="_blank" rel="noreferrer">
                → LinkedIn
              </SocialLink>
            </SocialRow>
          </Left>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <Right>
            <Form>
              <Input
                placeholder="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                $error={!!errors.name}
              />
              {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}

              <Input
                placeholder="Your Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                $error={!!errors.email}
              />
              {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}

              <Textarea
                placeholder="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                $error={!!errors.message}
              />
              {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}

              <SubmitButton onClick={handleSubmit}>Send Message</SubmitButton>

              {submitted && (
                <SuccessMsg
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thanks! Your message was sent successfully.
                </SuccessMsg>
              )}
            </Form>
          </Right>
        </motion.div>
      </Inner>
    </Section>
  )
}