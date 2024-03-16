import styled from "styled-components";
import { device, gradients, typography } from "../utils/StyleVars";
import SkillItem from "../ui/SkillItem";
import Skills from "../service/skillsData.js";

const StyledBigContainer = styled.div`
  background: ${gradients.bgGradientJet};
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 15px;
  padding: 20px;

  @media ${device.xs} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
`;

const StyledHalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const StyledSkillList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
`;

const StyledSkillListTitle = styled.p`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: ${typography.fw600};
  text-align: center;

  @media ${device.md} {
    font-size: ${typography.fs4};
  }

  @media ${device.sm} {
    font-size: ${typography.fs5};
  }
`;

function LanguageSection() {
  const skillDivide = Math.ceil(Skills.length / 2);

  return (
    <StyledBigContainer>
      <StyledHalfContainer>
        <StyledSkillListTitle>Linguagens de código</StyledSkillListTitle>
        <StyledSkillList>
          {Skills.slice(0, skillDivide).map((skill, index) => (
            <SkillItem key={index} name={skill.name} hability={skill.hability} />
          ))}
        </StyledSkillList>
      </StyledHalfContainer>
      <StyledHalfContainer>
        <StyledSkillListTitle>Linguagens de código</StyledSkillListTitle>
        <StyledSkillList>
          {Skills.slice(skillDivide).map((skill, index) => (
            <SkillItem key={index} name={skill.name} hability={skill.hability} />
          ))}
        </StyledSkillList>
      </StyledHalfContainer>
    </StyledBigContainer>
  );
}

export default LanguageSection;
