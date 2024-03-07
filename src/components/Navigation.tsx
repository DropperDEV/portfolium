import styled from "styled-components";
import {
  colors,
  device,
  shadows,
  transitions,
  typography,
} from "../utils/StyleVars";
import { NavLink } from "react-router-dom";

const StyledNavigation = styled.nav`
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

    ul {
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
export default function Navigation() {
  return (
    <StyledNavigation>
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
    </StyledNavigation>
  );
}
