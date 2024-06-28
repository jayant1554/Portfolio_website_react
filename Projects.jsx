import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  margin-bottom: 40px;
`;

const Project = styled.div`
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const ProjectDescription = styled.p`
  color: #666;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects" className="section">
      <h2>Projects</h2>
      <Project>
        <ProjectTitle>Language Detection Model</ProjectTitle>
        <ProjectDescription>
          A model to detect the language of user input, implemented using Flask for local hosting.
        </ProjectDescription>
        {/* Add more details as needed */}
      </Project>
      <Project>
        <ProjectTitle>Spotify Song Recommendation System</ProjectTitle>
        <ProjectDescription>
          Utilizes the Spotify API to recommend songs based on user playlists and input parameters, deployed locally with Flask.
        </ProjectDescription>
        {/* Add more details as needed */}
      </Project>
      {/* Add more projects here */}
    </ProjectsContainer>
  );
}

export default Projects;
