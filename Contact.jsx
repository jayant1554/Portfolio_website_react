import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  margin-bottom: 40px;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactInfo = styled.p`
  margin: 10px 0;
`;

const ContactLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #80c4e9;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const ContactInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #80c4e9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6098d8;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <ContactContainer id="contact" className="section">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactInfo>
        Phone: <ContactLink href="tel:+917838698030">7838698030</ContactLink><br />
        Email: <ContactLink href="mailto:jk913600@gmail.com">jk913600@gmail.com</ContactLink><br />
        <ContactLink href="https://www.linkedin.com/in/jayant-bisht-abb3a924a/">Linkedin</ContactLink><br />
         <ContactLink href="https://github.com/jayant1554">GIT HUB</ContactLink>      
      </ContactInfo>
      <ContactForm onSubmit={handleSubmit}>
        <ContactInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <ContactInput
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <ContactTextarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></ContactTextarea>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
