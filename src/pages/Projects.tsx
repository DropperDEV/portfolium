import styled from "styled-components";
import TitleMain from "../ui/TitleMain";
import { colors, typography } from "../utils/StyleVars";

const StyledSectionProject = styled.section`
  nav {
    margin-top: 30px;
  }
  nav ul {
    display: flex;
    gap: 30px;
  }
  nav ul li {
    color: ${colors.lightGray70};
    font-size: ${typography.fs5};
  }
  nav ul li:hover {
    color: ${colors.lightGray};
    cursor: pointer;
  }
`;

function Projects() {
  return (
    <>
      <TitleMain text="Meus projetos" />
      <StyledSectionProject>
        <nav>
          <ul>
            <li>Todos</li>
            <li>Websites</li>
            <li>Jogos</li>
            <li>Aplicações</li>
          </ul>
        </nav>
      </StyledSectionProject>
    </>
  );
}

export default Projects;
