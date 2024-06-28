import React from 'react';
import styled from 'styled-components';

const InterestsContainer = styled.section`
  margin-bottom: 40px;
`;

const InterestList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const InterestItem = styled.li`
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

const Interests = () => {
  return (
    <InterestsContainer id="interests" className="section">
      <SectionTitle>Interests</SectionTitle>
      <InterestList>
        <InterestItem>Data Analysis and Visualization</InterestItem>
        <InterestItem>Machine Learning Algorithms</InterestItem>
        <InterestItem>Artificial Intelligence Research</InterestItem>
        <InterestItem>Statistical Modeling</InterestItem>
        <InterestItem>Big Data Technologies (Hadoop, Spark)</InterestItem>
        <InterestItem>Cloud Computing (AWS, Azure)</InterestItem>
        <InterestItem>Natural Language Processing (NLP)</InterestItem>
        <InterestItem>Robotics and Automation</InterestItem>
        <InterestItem>Deep Learning (Neural Networks)</InterestItem>
      </InterestList>
    </InterestsContainer>
  );
}

export default Interests;
