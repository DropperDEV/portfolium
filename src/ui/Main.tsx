import styled from "styled-components";

const ContainerMain = styled.main`
  background-color: green;
  width: 800px;
  height: 94vh;
  border-radius: 10px;
  border: 1.5px solid black;
  margin-top: 5px;
`;

function Main() {
  return <ContainerMain></ContainerMain>;
}

export default Main;
