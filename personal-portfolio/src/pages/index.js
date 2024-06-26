import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`
const Home = () => (
  <Layout>
    <HomeContainer>
      <h1>Welcome to My Personal Portfolio</h1>
      <p>
        Hi, I'm Dayton Kotas, a software developer specializing in web development.
      </p>
    </HomeContainer>
  </Layout>
)

export default Home
