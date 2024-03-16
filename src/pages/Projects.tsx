import styled from "styled-components";
import TitleMain from "../ui/TitleMain";
import { colors, device, typography } from "../utils/StyleVars";
import ButtonNextRoute from "../ui/ButtonNextRoute";
import ButtonContainer from "../ui/ButtonContainer";
import ProjectList from "../ui/ProjectList";
import ProjectItem from "../components/ProjectItem";
import { useState } from "react";

const StyledSectionProject = styled.section`
  margin-bottom: 25px;
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

const projects = [
  {
    mediaSrc: "\\p_fenixquiz.png",
    name: "Quiz Fênix",
    features: ["Web game", "Frontend"],
    categorie: ["webgame", "games"],
    techs: ["Html", "Css", "Git"],
    ghLink: "https://dropperdev.github.io/fenixquiz/",
    repositorieLink: "https://github.com/DropperDEV/fenixquiz",
  },
  {
    mediaSrc: "\\p_lojafenix.png",
    name: "Loja Fênix",
    features: ["Website", "Frontend", "Design"],
    categorie: ["website", "aplication"],
    techs: ["Html", "Css", "Flexbox"],
    ghLink: "https://dropperdev.github.io/projeto-html-col-gio/",
    repositorieLink: "https://github.com/DropperDEV/lojafenix",
  },
];

function Projects() {
  const [selectedCategorie, setSelectedCategorie] = useState<string>("all");
  
  const filteredProjects = selectedCategorie === "all"
    ? projects
    : projects.filter(project => project.categorie.includes(selectedCategorie));

  return (
    <>
      <TitleMain text="Meus projetos" />
      <StyledSectionProject>
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
      </StyledSectionProject>
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
