/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from "styled-components";
import { device } from "../utils/StyleVars";

interface ITwoColumsSection {
  children: any;
}
const StyledTwoColumSectionGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  list-style: none;

  @media ${device.sm} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function TwoColumsSection({ children }: ITwoColumsSection) {
  return <StyledTwoColumSectionGrid>{children}</StyledTwoColumSectionGrid>;
}
