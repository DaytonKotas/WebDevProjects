import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--dark-green);
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--grey);
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--grey);
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  resize: vertical;
`

const Button = styled.button`
  background: var(--dark-green);
  color: var(--white);
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: var(--black);
  }
`

const Contact = () => (
  <Layout>
    <ContactContainer>
      <h1>Contact Me</h1>
      <p>
        If you have any questions or would like to get in touch, please fill out
        the form below:
      </p>
      <ContactForm name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows="5" required></Textarea>
        </FormGroup>
        <Button type="submit">Send</Button>
      </ContactForm>
    </ContactContainer>
  </Layout>
)

export default Contact
