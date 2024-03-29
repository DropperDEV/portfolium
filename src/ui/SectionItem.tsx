import styled from "styled-components";
import { colors, device, gradients, typography } from "../utils/StyleVars";
import React from "react";

interface ISectionItem {
  icon: React.ReactNode;
  text: string;
  title: string;
}

const StyledContainerItem = styled.li`
  background: ${gradients.bgGradientJet};
  display: flex;
  gap: 22px;
  padding: 40px;
  border-radius: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  svg {
    margin-top: 5px;
    min-width: 35px;
    min-height: 35px;
  }
`;

const StyledItemBody = styled.div`

  p {
    color: ${colors.lightGray};
    font-size: ${typography.fs6};
    font-weight: ${typography.fw300};
    line-height: 1.6;
  }
  @media ${device.sm} {
    font-size: ${typography.fs7};
  }
`;

const StyledItemTitle = styled.div`
  text-transform: capitalize;
  font-weight: ${typography.fw700};

  @media ${device.sm} {
    font-size: ${typography.fs5};
  }
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
