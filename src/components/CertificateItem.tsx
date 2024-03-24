import styled from "styled-components";
import { colors, device } from "../utils/StyleVars";

interface ICertificateItem {
  title: string;
  imgSrc: string;
  institution: string;
}

const StyledItemContainer = styled.li`
  position: relative;
  &:not(:last-child)::before {
    content: "";
    position: absolute;
    top: -35px;
    left: -30px;
    width: 1px;
    height: calc(100% + 50px);
    background: black;
  }

  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: -33px;
    height: 6px;
    width: 6px;
    background: ${colors.orange};
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${colors.jet};
  }

  .fromWhere {
    color: ${colors.lightGray70};
    margin-top: 8px;
    font-weight: ${colors.fw300};
    line-height: 1.6;
  }
`;

const StyledCertificateContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 5px;
  border: 10px solid black;
  box-sizing: border-box;

  img {
    display: block;
    width: 220px;
    height: auto;
  }

  @media ${device.xs} {
    img {
      width: 140px;
    }
  }

  &:hover img {
    transform: scale(1.05);
    cursor: zoom-in;
    transition: transform 0.5s ease;
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #000;
    pointer-events: none;
    box-sizing: border-box;
  }
`;

function CertificateItem({ title, institution, imgSrc }: ICertificateItem) {
  return (
    <StyledItemContainer>
      <h4>{title}</h4>
      <p className="fromWhere">{institution}</p>
      <StyledCertificateContainer>
        <img src={imgSrc} alt={title} onClick={() => window.open(imgSrc)} />
      </StyledCertificateContainer>
    </StyledItemContainer>
  );
}

export default CertificateItem;
