/* eslint-disable @typescript-eslint/no-explicit-any */
import { typography } from "../utils/StyleVars";
import styled from "styled-components";

interface ISection{
    title: string;
    children: any;
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

const StyledSectionTitle = styled.p`
  font-size: ${typography.fs1};
  font-weight: ${typography.fw600};
`;

export default function Section({title,children}: ISection) {
  return (
    <StyledSection>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {children}
    </StyledSection>
  );
}
