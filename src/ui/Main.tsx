import styled from "styled-components";

const ContainerMain = styled.main`
  width: 900px;
  height: 4000px;
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 22%);
  margin-top: 5px;
  box-shadow: -4px 8px 24px hsla(0, 0%, 0%, 0.25);
  background-color: hsla(240, 2%, 12%, 0.418);
`;

function Main() {
  return <ContainerMain></ContainerMain>;
}

export default Main;
