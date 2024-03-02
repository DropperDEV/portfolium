import styled from "styled-components";

const ContainerSide = styled.aside`
  background-color: red;
  width: 200px;
  height: 500px;
  padding: 8px;
  border-radius: 10px;
  border: 1.5px solid black;
  margin-top: 10px;
  
`;

function Sidebar() {
  return <ContainerSide></ContainerSide>;
}

export default Sidebar;
