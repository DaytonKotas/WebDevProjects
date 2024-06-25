import React from "react"
import styled from "styled-components"

const Card = styled.div`
  border: 1px solid var(--grey);
  padding: 1rem;
  margin: 1rem 0;
  background: var(--white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  h2 {
    color: var(--dark-green);
  }

  a {
    color: var(--dark-green);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const ProjectCard = ({ project }) => (
  <Card>
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </Card>
)

export default ProjectCard
