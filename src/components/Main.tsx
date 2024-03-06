import styled from "styled-components";
import {device} from "../utils/breakpoints.ts";
import {Link} from "react-router-dom";

const ContainerMain = styled.main`
  width: 900px;
  height: 1400px;
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 22%);
  margin-top: 20px;
  box-shadow: -4px 8px 24px hsla(0, 0%, 0%, 0.25);
  background-color: hsla(240, 2%, 12%, 0.418);
  @media ${device.lg} {
    width: 90%;

    align-items: baseline;
    justify-content: normal;
    position: relative;
    padding: 4px;

  }
  
  @media ${device.md}{
    width: 90%;

  }

  @media ${device.sm}{
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
  border-radius: 0 20px;
  padding: 0 10px;
  box-shadow: none;

`

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function Main({children}) {
  return <ContainerMain>
    <Navigation>
      <ul>
        <li>
          <Link to={"/"}>Sobre Mim</Link>
        </li>
        <li>
          <Link to={"/"}>Projetos</Link>
        </li>
        <li>
          <Link to={"/"}>Certificados</Link>
        </li>
        <li>
          <Link to={"/"}>Contato</Link>
        </li>
      </ul>
    </Navigation>
    {children}
  </ContainerMain>;
}

export default Main;
