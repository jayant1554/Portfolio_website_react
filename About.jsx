import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const About = () => {
  return (
    <Section id="about" className="section">
      <h2>About Me</h2>
      <p>I am Jayant Bisht, a third-year B.Tech student from Delhi, specializing in Computer Science. My passion lies in leveraging data science and machine learning to solve real-world problems. I actively participate in coding competitions and hackathons, constantly honing my skills in Python, Java, and various data analysis tools. My academic journey has been complemented by hands-on projects and research in artificial intelligence and statistical modeling.</p>
      <p>Outside of academics, I enjoy reading research papers, exploring new technologies, and contributing to open-source projects. My goal is to build a career at the intersection of technology and innovation, driving impactful solutions through continuous learning and application of cutting-edge technologies.</p>
    </Section>
  );
}

export default About;
