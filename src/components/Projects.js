import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import overrated from "../assets/img/overrated.gif";
import commonCrave from "../assets//img/commonCrave.gif"
import { Footer } from "./Footer";
import "../styles/Project.css"

export const Projects = () => {
  const projects = [
    {
      title: "Common Crave",
      description:
        "A restaurant recommendation website where friends can create groups to find a restaurant sharing their common craving while accommodating everyone's location.",
      imgUrl: commonCrave,
      gitUrl: "https://commoncrave.com/",
      technologies: "Node.js, Express.js, MongoDB, React, Redux, Tailwind, AWS, Nginx, Ubuntu"
    },
    {
      title: "Overrated",
      description:
      "A dating web application where users can find their soulmate by weeding out bad seeds with the implementation of dating reviews",
      imgUrl: overrated,
      gitUrl: "https://github.com/yeseniaramirez14/overrated",
      technologies: "FastAPI, PostgreSQL, React, Bootstrap"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <hr className="divider"></hr>
              <h2>Projects</h2>
            </div>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
      </Container>
      <Footer />
    </section>
  );
};
