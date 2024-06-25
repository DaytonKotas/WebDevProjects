import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem 0;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  background: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  line-height: 1.5;

  a {
    color: var(--dark-green);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 1 1 45%;
    margin-bottom: 0.5rem;
  }
`;

const Awards = styled.ul`
  li {
    margin-bottom: 0.5rem;
  }
`;

const Education = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.25rem 0;
  }
`;

const Experience = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-bottom: 0.25rem;
  }

  p {
    margin: 0.25rem 0;
  }
`;

const Resume = () => (
  <Layout>
    <Container>
      <h1>Resume</h1>
      <ContactInfo>
        <p>West Allis, WI</p>
        <p>414-430-5606</p>
        <p>
          <a href="mailto:DaytonKotas73@gmail.com">DaytonKotas73@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/daytonkotas" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/daytonkotas</a>
        </p>
      </ContactInfo>

      <Section>
        <h2>Skills</h2>
        <Skills>
          <li>Web Development</li>
          <li>Software Development</li>
          <li>Object Oriented Programming</li>
          <li>Database Management</li>
          <li>Time Management</li>
          <li>Team Management</li>
          <li>Customer Service</li>
          <li>Communication Skills</li>
          <li>Computer Literacy</li>
          <li>Problem Management</li>
        </Skills>
      </Section>

      <Section>
        <h2>Awards</h2>
        <Awards>
          <li>IT Coding Badge - MATC</li>
          <li>Uplift Scholar - PepsiCo</li>
        </Awards>
      </Section>

      <Section>
        <h2>Education</h2>
        <Education>
          <h3>Milwaukee Area Technical College - Milwaukee, WI</h3>
          <p>09/2022 - 07/2024</p>
          <p>IT and Web Development</p>
          <p>Developing software applications that can be deployed using a variety of platforms. Learning essential programming skills while developing software that utilizes client and server processing, connects to databases, and will run simultaneously on multiple devices.</p>
          <ul>
            <li>Design web and software applications</li>
            <li>Apply data persistence technologies</li>
            <li>Develop software applications</li>
            <li>Develop web applications</li>
            <li>Develop documentation</li>
            <li>Use infrastructures</li>
            <li>Analyze new technologies</li>
          </ul>

          <h3>West Allis Central - West Allis, WI</h3>
          <p>09/2013 - 07/2017</p>
          <p>High School Diploma</p>
        </Education>
      </Section>

      <Section>
        <h2>Experience</h2>
        <Experience>
          <h3>Expedient - Franklin, WI</h3>
          <h4>Server</h4>
          <p>05/2024 – Present</p>
          <ul>
            <li>Technical Support: Provide Tier 1 technical support, managing and resolving tickets for a wide range of IT issues, including virtualization, networking, data protection, Windows, disaster recovery, and Linux/Unix systems.</li>
            <li>Security Management: Enforce strict security protocols for client access and equipment handling within the data center, ensuring compliance with all security and access control criteria.</li>
            <li>Infrastructure Maintenance: Conduct routine audits, physical and virtual security checks, and perform hands-on assessments and maintenance of data center infrastructure.</li>
            <li>Customer Service: Process and prioritize technical requests from clients and employees, delivering high-quality customer service and technical support via phone, email, and in person.</li>
            <li>Material Handling: Manage shipping and receiving procedures, ensuring secure transport and handling of materials and equipment.</li>
            <li>This role has honed my technical proficiency, problem-solving capabilities, and ability to manage multiple, time-sensitive responsibilities.</li>
          </ul>

          <h3>Cooper's Hawk Winery & Restaurants - Brookfield, WI</h3>
          <h4>Server</h4>
          <p>01/2023 - 04/2024</p>
          <ul>
            <li>Primary responsibility was to ensure that guests felt welcome, comfortable, and satisfied with their experience.</li>
            <li>Greeting customers, taking their orders, serving food and beverages, anticipating their needs, answering questions, and ensuring that their orders are accurate and delivered promptly.</li>
            <li>Able to handle customer complaints or concerns with professionalism and a positive attitude. With excellent communication skills, attention to detail, and a strong desire to provide exceptional service.</li>
          </ul>

          <h3>Aurora St. Luke's Medical Center - Milwaukee, WI</h3>
          <h4>Food Service Ambassador</h4>
          <p>08/2021 - 08/2022</p>
          <ul>
            <li>Was to act as the key contact person between food and nutrition and the patient. Provided patients with an orientation to Room Service and other department services including the patient menu, diet order, meal ordering process, guest services, and how to speak with a dietitian.</li>
            <li>Inventoried and ordered floor stock supplies on patient units.</li>
            <li>Delivered meals and collected patient trays after meals. Ensures satisfaction of patients with food items upon delivery. Resolves any patient concerns.</li>
            <li>Utilized established safety and sanitation standards to ensure safe food handling techniques and prevent bacteria contamination. Follows all isolation precautions while delivering and collecting trays.</li>
          </ul>

          <h3>Carrabba's Italian Grill - Brookfield, WI</h3>
          <h4>Server</h4>
          <p>02/2019 - 06/2021</p>
          <ul>
            <li>Worked with POS system to place orders, manage bills and handle complimentary items.</li>
            <li>Arranged and prepared tables for customers to offer memorable experiences to guests and foster repeat business. Used slow periods to restock supplies, ice, trays, and delivery bags.</li>
            <li>Cultivated warm relationships with regular customers.</li>
            <li>Carried out the complete opening, closing, and shift change duties to keep the restaurant working efficiently and teams ready to meet and arranged and prepared tables for customers to offer</li>
          </ul>

          <h3>United States Postal Service - Milwaukee, WI</h3>
          <h4>City Carrier Assistant</h4>
          <p>01/2018 - 01/2019</p>
          <ul>
            <li>Entrusted with the timely and accurate delivery of mail and packages to residents and businesses within an assigned route.</li>
            <li>Demonstrated a strong commitment to customer service, reliability, and efficiency, while navigating diverse weather conditions and maintaining a high level of physical fitness to fulfill the demands of the job.</li>
          </ul>

          <h3>Chilis Bar & Grill - West Allis, WI</h3>
          <h4>Server and To-Go Specialist</h4>
          <p>07/2013 - 10/2017</p>
          <ul>
            <li>Excelled in providing outstanding dining and takeout experiences to customers</li>
            <li>Showcasing strong multitasking abilities and a commitment to excellent customer service.</li>
            <li>Responsible for managing dining service and executing efficient to-go orders, ensuring all guests received prompt, accurate, and friendly service.</li>
          </ul>
        </Experience>
      </Section>
    </Container>
  </Layout>
);

export default Resume;
