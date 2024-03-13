
import styled from "styled-components";
import { colors, typography } from "../utils/StyleVars";

const StyledSkillItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const StyledSkillWrapperTitle = styled.div`
  display: flex;
  gap: 4px;

  p:first-child {
    font-weight: ${typography.fw600};
    font-size: ${typography.fs6};
  }
  p {
    color: ${colors.lightGray};
    font-size: ${typography.fs7};
    font-weight: ${typography.fw300};
  }
`;

const StyledSkillProgress = styled.div`
  min-width: 100%;
  height: 7px;
  background: ${colors.jet};
  border: none;
  border-radius: 10px;

  .inside-bar {
    background: rgb(255, 100, 0);
    background: linear-gradient(
      90deg,
      rgba(255, 100, 0, 1) 32%,
      rgba(180, 71, 0, 1) 74%,
      rgba(130, 51, 0, 1) 100%
    );
    max-width: 60%;
    height: 100%;
    border-radius: inherit;
  }
`;

function SkillItem() {
  return (
    <StyledSkillItem>
      <StyledSkillWrapperTitle>
        <p>Javascript</p>
        <p>90%</p>
      </StyledSkillWrapperTitle>
      <StyledSkillProgress>
        <div className="inside-bar"></div>
      </StyledSkillProgress>
    </StyledSkillItem>
  );
}

export default SkillItem;
