import styled from "styled-components";
import TitleMain from "../ui/TitleMain";
import { colors, typography } from "../utils/StyleVars";
import ButtonNextRoute from "../ui/ButtonNextRoute";
import ButtonContainer from "../ui/ButtonContainer";

const StyledSectionProject = styled.section`
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
  nav ul li:hover {
    color: ${colors.lightGray};
    cursor: pointer;
  }
  margin-bottom: 25px;
`;

const StyledProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 40px;
`;

const StyledProjectItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  p {
    font-size: ${typography.fs5};
    color: ${colors.lightGray70};
  }

  .title {
    color: ${colors.white2};
    font-weight: ${typography.fw400};
    text-transform: capitalize;
    line-height: 1.3;
    margin-bottom: 3px;
  }

  .subTitle {
    display: flex;
    gap: 5px;
  }
  .link {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 6px;
  }
  a {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: hsla(240, 3%, 13%, 0.214);
    margin: 0 5px;
    padding: 2px 10px;
    border-radius: 6px;
    text-decoration: none;
    color: ${colors.orange};
    font-size: 17px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a:hover{
    background-color: hsla(240, 3%, 13%, 0.581);
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
        <StyledProjectList>
          <StyledProjectItem>
            <img src="\p_fenixquiz.png" alt="" />
            <p className="title">Site muito brabo</p>
            <div className="subTitle">
              <p>Website</p>
              <p>+</p>
              <p>Frontend</p>
            </div>
            <div>
              <p>Javascript</p>
            </div>
            <div className="link">
              <a href="">Prévia</a>
              <a href="">Github</a>
            </div>
          </StyledProjectItem>
          <StyledProjectItem>
            <img src="\p_lojafenix.png" alt="" />
            <p className="title">Site muito brabo</p>
            <div className="subTitle">
              <p>Website</p>
              <p>+</p>
              <p>Frontend</p>
            </div>
            <div>
              <p>Javascript</p>
            </div>
            <div className="link">
              <a href="">Prévia</a>
              <a href="">Github</a>
            </div>
          </StyledProjectItem>
          <StyledProjectItem>
            <img src="\p_lojafenix.png" alt="" />
            <p className="title">Site muito brabo</p>
            <div className="subTitle">
              <p>Website</p>
              <p>+</p>
              <p>Frontend</p>
            </div>
            <div>
              <p>Javascript</p>
            </div>
            <div className="link">
              <a href="">Prévia</a>
              <a href="">Github</a>
            </div>
          </StyledProjectItem>
          <StyledProjectItem>
            <img src="\p_lojafenix.png" alt="" />
            <p className="title">Site muito brabo</p>
            <div className="subTitle">
              <p>Website</p>
              <p>+</p>
              <p>Frontend</p>
            </div>
            <div>
              <p>Javascript</p>
            </div>
            <div className="link">
              <a href="">Prévia</a>
              <a href="">Github</a>
            </div>
          </StyledProjectItem>
          <StyledProjectItem>
            <img src="\p_lojafenix.png" alt="" />
            <p className="title">Site muito brabo</p>
            <div className="subTitle">
              <p>Website</p>
              <p>+</p>
              <p>Frontend</p>
            </div>
            <div>
              <p>Javascript</p>
            </div>
            <div className="link">
              <a href="">Prévia</a>
              <a href="">Github</a>
            </div>
          </StyledProjectItem>
        </StyledProjectList>
      </StyledSectionProject>
      <ButtonContainer>
        <ButtonNextRoute to="/certificates" />
      </ButtonContainer>
    </>
  );
}

export default Projects;
