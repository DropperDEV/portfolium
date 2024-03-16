/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { device } from "../utils/StyleVars";

interface IProjectList {
  children: any;
}
const StyledProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  margin-bottom: 40px;

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function ProjectList({ children }: IProjectList) {
  return <StyledProjectList>{children}</StyledProjectList>;
}

export default ProjectList;
