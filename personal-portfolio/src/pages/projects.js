import React from "react"
import Layout from "../components/layout"

const projects = [
  {
    name: "YoFuel",
    description:
      "E-commerce website for buying Greek yogurt mixed with protein powder.",
    link: "https://github.com/DaytonKotas/YoFuel",
  },
  {
    name: "Frogs and Toads Blog",
    description:
      "A blogging application focused on Frogs and Toads, with information about each species, their habitats, and their differences.",
    link: "https://github.com/DaytonKotas/FrogsToadsBlog",
  },
]

const ProjectsPage = () => (
  <Layout>
    <h2>Projects</h2>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </li>
      ))}
    </ul>
  </Layout>
)

export default ProjectsPage
