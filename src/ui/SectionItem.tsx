import styled from "styled-components";
import { colors, gradients, typography } from "../utils/StyleVars";
import React from "react";

interface ISectionItem {
  icon: React.ReactNode;
  text: string;
  title: string;
}

const StyledContainerItem = styled.li`
  background: ${gradients.bgGradientJet};
  display: flex;
  gap: 18px;
  padding: 30px;
  border-radius: 15px;
  justify-content: flex-start;
  align-items: flex-start;

  .icon {
    margin-bottom: 20px;
  }
`;

const StyledItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;

  p {
    color: ${colors.lightGray};
    font-size: ${typography.fs6};
    font-weight: ${typography.fw300};
    line-height: 1.6;
  }
`;

const StyledItemTitle = styled.div`
  text-transform: capitalize;
  font-weight: ${typography.fw700};
`;
function SectionItem({ icon, title, text }: ISectionItem) {
  return (
    <StyledContainerItem>
      {icon}
      <StyledItemBody>
        <StyledItemTitle>{title}</StyledItemTitle>
        <p>{text}</p>
      </StyledItemBody>
    </StyledContainerItem>
  );
}

export default SectionItem;
