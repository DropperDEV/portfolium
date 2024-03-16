import { useState } from "react";
import styled from "styled-components";
import TitleMain from "../ui/TitleMain";
import { colors, device, typography } from "../utils/StyleVars";
import ButtonNextRoute from "../ui/ButtonNextRoute";
import ButtonContainer from "../ui/ButtonContainer";
import ProjectList from "../ui/ProjectList";
import ProjectItem from "../components/ProjectItem";
import projects from "../service/projectsData.js";

const StyledSectionNav = styled.section`
  nav {
    margin-top: 30px;
    margin-bottom: 40px;
  }
  nav ul {
    display: flex;
    gap: 30px;
  }
  nav ul li {
    color: ${colors.lightGray70};
    font-size: ${typography.fs5};
  }
  nav ul li button:hover {
    color: ${colors.lightGray};
    cursor: pointer;
  }
  @media ${device.xs} {
    nav ul {
      flex-direction: column;
    }
  }
`;

function Projects() {
  const [selectedCategorie, setSelectedCategorie] = useState("all");

  const filteredProjects = selectedCategorie === "all"
    ? projects
    : projects.filter(project => project.categorie.includes(selectedCategorie));

  return (
    <>
      <TitleMain text="Meus projetos" />
      <StyledSectionNav>
        <nav>
          <ul>
            <li>
              <button onClick={() => setSelectedCategorie("all")}>Todos</button>
            </li>
            <li>
              <button onClick={() => setSelectedCategorie("website")}>
                Websites
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategorie("games")}>
                Jogos
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategorie("aplication")}>
                Aplicações
              </button>
            </li>
          </ul>
        </nav>
      </StyledSectionNav>
      <ProjectList>
        {filteredProjects.map((project, index) => (
          <ProjectItem
            mediaSrc={project.mediaSrc}
            name={project.name}
            features={project.features}
            techs={project.techs}
            ghLink={project.ghLink}
            repositorieLink={project.repositorieLink}
            key={index}
          />
        ))}
      </ProjectList>
      <ButtonContainer>
        <ButtonNextRoute to="/certificates" />
      </ButtonContainer>
    </>
  );
}

export default Projects;
