import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { device, shadows, transitions, colors, typography } from "../utils/StyleVars.ts";
import { IoSwapVertical } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdCake } from "react-icons/md";
import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";

const ContainerSide = styled.aside<{ $active: boolean }>`
  position: sticky;
  top: 30px;
  z-index: 1;
  background-color: ${colors.eerieBlack2};
  width: 240px;
  border-radius: 10px;
  border: 1px solid ${colors.jet};
  margin-top: 10px;
  box-shadow: ${shadows.shadow5};
  padding: 8px;
  height: 30%;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  transition: ${transitions.transition2};

  @media ${device.lg} {
    width: 90%;
    max-height: 200px;
    align-items: center;
    justify-content: normal;
    position: relative;
    padding: 30px;
    max-height: ${props => (props.$active ? "520px" : "auto")};
  }
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  margin-top: 10px;
  transition: 0.5s ease-in-out;

  @media ${device.lg} {
    width: 70px;
    height: 70px;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;

  margin-top: 20px;
  gap: 15px;
  @media ${device.lg} {
    display: flex;
    align-items: unset;
    margin: 5px 0px 0px;
  }
`;

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: large;
  margin: 0px;
  letter-spacing: -0.25px;
  transition: 0.5s ease-in-out;
`;
const StyledSubTitle = styled.p`
  background-color: ${colors.eerieBlack2};
  font-weight: 600;
  font-size: small;
  border-radius: 15px;
  padding: 5px 50px 5px 50px;
  margin: 0px;
  text-align: center;
  animation: glow 5s ease-in-out infinite alternate;
  @media ${device.lg} {
    padding: 5px 20px;
  }
  @keyframes glow {
    from {
      box-shadow: 0 0 15px ${colors.lightGray70}, 0 0 15px ${colors.white1}, 0 0 15px ${colors.lightGray};
    }
    to {
      box-shadow: 0 0 3px #ffffff0e;
    }
  }
`;
const Button = styled.button`
  display: none;
  visibility: hidden;
  transition: 0.25s ease;

  &:hover,
  &:focus {
    background: linear-gradient(
        to bottom right,
        hsl(20, 100%, 41%) 0%,
        hsla(36, 100%, 69%, 0) 50%
    );
  }

  &:before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: ${colors.eerieBlack2};
    transition: 0.25s ease;
    z-index: -1;
  }

  &:hover::before,
  &:focus::before {
    background: linear-gradient(
        to bottom right,
        hsl(24, 92%, 58%) 0%,
        hsla(36, 100%, 69%, 0) 50%
    );
  }

  @media ${device.lg} {
    display: block;
    visibility: visible;
    position: absolute;
    top: -32px;
    right: -35px;
    border-radius: 0px 10px;
    color: ${colors.white1};
    background: linear-gradient(
        to bottom right,
        hsla(0, 0%, 25%, 0.452) 0%,
        hsla(0, 0%, 25%, 0) 50%
    );
  ;
    transition: 0.25s ease;
    z-index: 1;
    padding: 8px 12px 5px;
  }
`;
const Separator = styled.div<{ $visible?: boolean; $active: boolean }>`
  width: 88%;
  height: 1px;
  background: black;
  margin: 25px 0px;
  visibility: ${props => (props.$visible ? "visible" : "hidden")};
  display: ${props => (props.$visible ? "block" : "none")};
  transition: 0.5s ease-in-out;
  animation: fade 0.5s ease backwards;

  @media ${device.lg} {
    width: 93%;
    visibility: visible;
    display: ${props => (props.$active ? "block" : "none")};
    margin: 15px 0px;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const InfoSection = styled.section<{ $active: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  transition: 0.5s ease-in-out;

  @media ${device.lg} {
    display: ${props => (props.$active ? "grid" : "none")};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    gap: 30px 15px;
    margin: 15px;
  }

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
  }
`;

const ContainerItem = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  min-width: 100%;
  gap: 16px;
  transition: 0.5s ease-in-out;
  animation: fade 0.5s ease backwards;

  @media ${device.lg} {
    display: ${props => (props.$active ? "flex" : "none")};
    opacity: ${props => (props.$active ? "1" : "0")};
    pointer-events: ${props => (props.$active ? "auto" : "none")};

    min-width: 100%;
    width: fit-content;
    justify-content: flex-start;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ItemInfo = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;

  gap: 5px;

  @media ${device.lg} {
    display: ${props => (props.$active ? "flex" : "none")};
    opacity: ${props => (props.$active ? "1" : "0")};
  }
`;

const ItemTitle = styled.p<{ $active: boolean }>`
  color: ${colors.lightGray70};
  font-weight: 600;
  font-size: smaller;
  margin: 0px;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;

  @media ${device.lg} {
    display: ${props => (props.$active ? "flex" : "none")};
    opacity: ${props => (props.$active ? "1" : "0")};
  }
`;

const ItemBody = styled.p<{ $active: boolean }>`
  font-size: small;
  margin: 0px;
  font-weight: ${typography.fw500};
  transition: 0.5s ease-in-out;

  @media ${device.lg} {
    display: ${props => (props.$active ? "flex" : "none")};
    opacity: ${props => (props.$active ? "1" : "0")};
  }
`;
const ContainerIconItem = styled.div<{ $active: boolean }>`
  display: flex;
  box-shadow: ${shadows.shadow5};
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blueNavy};
  border-radius: 15px;
  height: 45px;
  width: 45px;
  z-index: 1;
  transition: 0.5s ease-in-out;

  @media ${device.lg} {
    display: ${props => (props.$active ? "flex" : "none")};
  }

  .icon-info {
    color: ${colors.orange};
  }
`;

const LinkedIconZone = styled.div<{ $active: boolean }>`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  padding: 10px;
  animation: fade 0.5s ease backwards;

  @media ${device.lg} {
    display: ${props => (props.$active ? "flex" : "none")};
    width: 100%;
  }

  .icon {
    color: ${colors.lightGray};
  }

  .icon:hover {
    color: ${colors.white1};
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MobileSideTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  transition: 0.5s ease-in-out;

  @media ${device.lg} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: unset;
    gap: 20px;

    &:before {
      content: "";
      position: absolute;
      inset: 1px;
      border-radius: inherit;

      z-index: -1;
    }
  }
`;

function Sidebar() {
  const [active, setActive] = useState<boolean>(false);

  return (
      <ContainerSide $active={active}>
        <MobileSideTitle>
          <StyledImage src="/JamesPhoto.png" alt="James Costa" />
          <ContainerTitle>
            <StyledTitle>James Costa</StyledTitle>
            <StyledSubTitle>Hello, World!</StyledSubTitle>
          </ContainerTitle>
          <Button onClick={() => setActive(!active)}>
            <IoSwapVertical size={25} />
          </Button>
        </MobileSideTitle>
        <Separator $visible={true} $active={active} />
        <InfoSection $active={active}>
          <ContainerItem $active={active}>
            <ContainerIconItem $active={active}>
              {" "}
              <MdCake size={20} className={"icon-info"} />
            </ContainerIconItem>
            <ItemInfo $active={active}>
              <ItemTitle $active={active}>Idade</ItemTitle>
              <ItemBody $active={active}>18 anos de idade</ItemBody>
            </ItemInfo>
          </ContainerItem>
          <ContainerItem $active={active}>
            <ContainerIconItem $active={active}>
              <IoLocationSharp size={20} className={"icon-info"} />
            </ContainerIconItem>
            <ItemInfo $active={active}>
              <ItemTitle $active={active}>Localização</ItemTitle>
              <ItemBody $active={active}>Fortaleza, Brasil</ItemBody>
            </ItemInfo>
          </ContainerItem>
          <ContainerItem $active={active}>
            <ContainerIconItem $active={active}>
              <IoPersonSharp size={20} className={"icon-info"} />
            </ContainerIconItem>
            <ItemInfo $active={active}>
              <ItemTitle $active={active}>Personalidade</ItemTitle>
              <ItemBody $active={active}>INTP-T</ItemBody>
            </ItemInfo>
          </ContainerItem>
        </InfoSection>
        <Separator $visible={false} $active={active} />
        <LinkedIconZone $active={active}>
          <a href="https://www.linkedin.com/in/james-soares-costa/" target="_blank">
            <FaLinkedin size={18} className={"icon"} />
          </a>
          <a href="https://github.com/DropperDEV" target="_blank">
            <FaGithub size={18} className={"icon"} />
          </a>
        </LinkedIconZone>
      </ContainerSide>
  );
}

export default Sidebar;
