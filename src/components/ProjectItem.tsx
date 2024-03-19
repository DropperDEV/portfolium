import { colors, typography } from "../utils/StyleVars";
import styled from "styled-components";
import { IoEyeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

interface IProjectItem {
  mediaSrc: string;
  name: string;
  features: Array<string>;
  techs: Array<string>;
  ghLink?: string;
  repositorieLink?: string;
}
const StyledProjectItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
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

  .subTitle p {
    display: flex;
    gap: 5px;
    text-transform: capitalize;
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
    gap: 8px;
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

  a{
    color: ${colors.orange};
  }

  a:hover {
    background-color: hsla(240, 3%, 13%, 0.581);
  }
`;

function ProjectItem({
  mediaSrc,
  name,
  features,
  techs,
  ghLink,
  repositorieLink,
}: IProjectItem) {
  return (
    <StyledProjectItem>
      <img src={mediaSrc} alt={name} />
      <p className="title">{name}</p>
      <div className="subTitle">
        <p>
          {features.length > 1
            ? features.map((feature, index) =>
                index < features.length - 1 ? `${feature} + ` : feature
              )
            : features}
        </p>
      </div>
      <div className="tech">
        <p>
          {techs.map((tech, index) =>
            index < techs.length - 1 ? `${tech} | ` : tech
          )}
        </p>
      </div>
      <div className="link">
        {ghLink ? (
          <a href={ghLink} target="_blank">
            <IoEyeOutline /> Previa
          </a>
        ) : (
          ""
        )}
        {repositorieLink ? (
          <a href={repositorieLink} target="_blank">
            <FaGithub />
            Repositorio
          </a>
        ) : (
          ""
        )}
      </div>
    </StyledProjectItem>
  );
}

export default ProjectItem;
