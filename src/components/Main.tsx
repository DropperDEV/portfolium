import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  colors,
  device,
  shadows,
  transitions,
  typography,
} from "../utils/StyleVars.ts";

const ContainerMain = styled.main`
  position: relative;
  width: 900px;
  height: 1400px;
  border-radius: 10px;
  border: 1px solid ${colors.jet};
  margin-top: 20px;
  box-shadow: ${shadows.shadow5};
  background-color: ${colors.eerieBlack2};

  @media ${device.lg} {
    width: 90%;
    align-items: baseline;
    justify-content: normal;
    position: relative;
    padding: 4px;
  }

  @media ${device.md} {
    width: 90%;
  }

  @media ${device.sm} {
    width: 90%;
  }
`;

const Navigation = styled.nav`
  position: absolute;
  bottom: auto;
  top: 0;
  left: auto;
  right: 0;
  width: max-content;
  border-radius: 0 0 0 20px;
  padding: 0 10px;
  background: hsla(240, 1%, 17%, 0.75);
  z-index: 5;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    list-style: none;
    gap: 30px;
    padding: 0 20px;
  }

  a {
    color: ${colors.lightGray};
    font-size: 15px;
    padding: 20px 7px;
    transition: color ${transitions.transition1};
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: ${colors.lightGray70};
  }

  a.active {
    color: ${colors.orange};
  }

  @media ${device.md} {
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    width: 100%;
    background: hsla(240, 1%, 17%, 0.75);
    backdrop-filter: blur(10px);
    border: ${colors.jet};
    border-radius: 12px 12px 0 0;
    box-shadow: ${shadows.shadow2};
    z-index: 5;

    ul{
      gap: 0;
    }

    a {
      font-weight: ${typography.fw500};
    }
  }
  @media ${device.sm} {
    a {
      font-size: 11px;
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function Main({ children }) {
  return (
    <ContainerMain>
      <Navigation>
        <ul>
          <li>
            <NavLink to={"/"}>Sobre Mim</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Projetos</NavLink>
          </li>
          <li>
            <NavLink to={"/certificates"}>Certificados</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contato</NavLink>
          </li>
        </ul>
      </Navigation>
      {children}
    </ContainerMain>
  );
}

export default Main;
