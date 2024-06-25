import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import styled from "styled-components"

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  background: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
`

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      link: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      link: "https://github.com/yourusername/project2",
    },
  ]

  return (
    <Layout>
      <Container>
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Container>
    </Layout>
  )
}

export default Projects
