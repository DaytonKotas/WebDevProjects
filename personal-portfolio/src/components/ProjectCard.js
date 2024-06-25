import React from "react"
import styled from "styled-components"

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
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
