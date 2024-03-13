/* eslint-disable @typescript-eslint/no-explicit-any */
import { colors, transitions, typography } from "../utils/StyleVars";
import styled from "styled-components";

interface ISection {
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
  padding-bottom: 10px;
  margin-bottom: 8px;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    min-width: 10px;
    height: 4px;
    background: ${colors.orange};
    border-radius: 3px;
    transition: ${transitions.transition1};
  }

  &:hover:after {
    min-width: 100%; /* Change to min-width for consistency */
  }
`;

export default function Section({ title, children }: ISection) {
  return (
    <StyledSection>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {children}
    </StyledSection>
  );
}
