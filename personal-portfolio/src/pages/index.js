import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import * as styles from "./styles/home.module.css" // Use named import

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`

const HomePage = () => {
  return (
    <Layout>
      <HomeContainer>
        <div className={styles.content}>
          <h1>Welcome to My Personal Portfolio</h1>
          <p>
            Hi, I'm Dayton Kotas, a software developer specializing in web
            development. Explore my projects and learn more about me.
          </p>
        </div>
      </HomeContainer>
    </Layout>
  )
}

export default HomePage
