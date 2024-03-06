import styled from "styled-components";
import {Link} from "react-router-dom";
import {colors,device, shadows} from "../utils/StyleVars.ts";

const ContainerMain = styled.main`
  width: 900px;
  height: 1400px;
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 22%);
  margin-top: 20px;
  box-shadow: ${shadows.shadow5};
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
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: hsla(240, 1%, 17%, 0.75);
  backdrop-filter: blur(10px);
  border: ${colors.jet};
  border-radius: 12px 12px 0 0;
  box-shadow: ${shadows.shadow2};
  z-index: 5;

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