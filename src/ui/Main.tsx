import styled from "styled-components";
import {device} from "../utils/breakpoints.ts";

const ContainerMain = styled.main`
  width: 900px;
  height: 1400px;
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 22%);
  margin-top: 5px;
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

function Main() {
  return <ContainerMain></ContainerMain>;
}

export default Main;
