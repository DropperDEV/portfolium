import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { device } from "../utils/breakpoints";
import { IoSwapVertical } from "react-icons/io5";
import { useState } from "react";




const ContainerSide = styled.aside<{$active: boolean;}>`
  position: sticky;
  top: 30px;
  z-index: 1;
  background-color: red;
  width: 240px;
  max-height:180px;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid wheat;
  margin-top: 10px;

  overflow: hidden;
  transition: 0.5s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.lg} {
    width: 900px;
    align-items: baseline;
    justify-content: normal;
    position: relative;
    padding: 4px;
    max-height: ${props => props.$active ? '450px' : 'auto'}
    
  }
  
  @media (min-width: 1280px){
    max-height: 600px;
    gap: 10px;
  }
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  margin-top: 10px;

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
`;

const StyledSubTitle = styled.p`
  background-color: #07037e;
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
      box-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 2px #fff,
      0 0 4px hsla(45, 100%, 90%, 0.5), 0 0 7px hsla(45, 100%, 90%, 0.5),
      0 0 10px hsla(45, 100%, 90%, 0.5), 0 0 12px hsla(45, 100%, 90%, 0.5),
      0 0 15px hsla(45, 100%, 90%, 0.5);
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
    background: greenyellow;
  }

  &:before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: deepskyblue;
    transition: 0.25s ease;
    z-index: -1;
  }

  &:hover::before,
  &:focus::before {
    background: purple;
  }

  @media ${device.lg} {
    display: block;
    visibility: visible;
    position: absolute;
    top: -30px;
    right: 20px;
    border-radius: 0px 10px;
    color: green;
    background: yellow;
    transition: 0.25s ease;
    z-index: 1;
    padding: 8px 12px 5px;
  }
`;
const Separator = styled.div<{ $visible?: boolean; $active: boolean}>`
  width: 175px;
  height: 1px;
  background: black;
  margin: 25px 0px;
  visibility: ${props => props.$visible ? "visible" : "hidden"};
  display: ${props => props.$visible ? "block" : "none"};

  @media ${device.lg}{
    width: 93%;
    visibility: visible;
    display: ${props => props.$active ? "block" : "none"};
    margin: 20px 0px;
  }
`;
const InfoSection = styled.section<{$active: boolean;}>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  transition: 0.5s ease-in-out;
  
  @media ${device.lg}{
    display: ${props => props.$active ? "grid" : "none"};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    gap: 30px 15px;
    margin: 15px;
  }
`;

const ContainerItem = styled.div<{$active: boolean;}>`
  display: flex;
  align-items: center;
  min-width: 100%;
  gap: 16px;
  transition: 0.5s ease-in-out;

  @media ${device.lg}{
    display: ${props => props.$active ? "flex" : "none"};
    min-width: 100%;
    width: fit-content;
    justify-content: flex-start;
  }
`;

const ItemInfo = styled.div<{$active: boolean;}>`
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  
  @media ${device.lg}{
    display: ${props => props.$active ? "flex" : "none"};

  }
`;

const ItemTitle = styled.p<{$active: boolean;}>`
  color: #c6a6a6;
  font-weight: 600;
  font-size: smaller;
  margin: 0px;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;

  @media ${device.lg}{
    display: ${props => props.$active ? "flex" : "none"};

  }
`;

const ItemBody = styled.p<{$active: boolean;}>`
  font-size: small;
  margin: 0px;
  font-weight: 600;
  transition: 0.5s ease-in-out;

  @media ${device.lg}{
    display: ${props => props.$active ? "flex" : "none"};

  }
`;
const ContainerIconItem = styled.div<{$active: boolean;}>`
  display: flex;

  position: relative;
  justify-content: center;
  align-items: center;
  background-color: brown;
  border-radius: 15px;
  height: 45px;
  width: 45px;
  z-index: 1;
  transition: 0.5s ease-in-out;

  @media ${device.lg}{
    display: ${props => props.$active ? "flex" : "none"};

  }
`;

const LinkedIconZone = styled.div<{$active: boolean;}>`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  padding: 10px;
  
  @media ${device.lg}{
    display: ${props => props.$active ? "flex" : "none"};
    padding-bottom: 18px;
    width: 100%;
  }
  
  a:hover{
    color: #747bff;
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
    margin: 25px;

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
        <StyledImage src="/JamesPhoto.png" alt="James Costa"  />
        <ContainerTitle >
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
            <img src="/icon/IconYear.svg" alt="Anos" />
          </ContainerIconItem>
          <ItemInfo $active={active}>
            <ItemTitle $active={active}>Idade</ItemTitle >
            <ItemBody $active={active}>18 anos de idade</ItemBody>
          </ItemInfo>
        </ContainerItem>
        <ContainerItem $active={active}>
          <ContainerIconItem $active={active}>
            <img src="/icon/IconLocation.svg" alt="Localização" />
          </ContainerIconItem>
          <ItemInfo $active={active}>
            <ItemTitle $active={active}>Localização</ItemTitle>
            <ItemBody $active={active}>Fortaleza, Brasil</ItemBody>
          </ItemInfo>
        </ContainerItem>
        <ContainerItem $active={active}>
          <ContainerIconItem $active={active}>
            <img src="/icon/IconPerson.svg" alt="Personalidade" />
          </ContainerIconItem>
          <ItemInfo $active={active}>
            <ItemTitle $active={active}>Personalidade</ItemTitle>
            <ItemBody $active={active}>INTP-T</ItemBody>
          </ItemInfo>
        </ContainerItem>
      </InfoSection>
      <Separator $visible={false} $active={active} />
      <LinkedIconZone $active={active}>
        <a
          href="https://www.linkedin.com/in/james-soares-costa/"
          target="_blank"
        >
          <FaLinkedin size={17}  />
        </a>
        <a href="https://github.com/DropperDEV" target="_blank">
          <FaGithub  size={17} />
        </a>
      </LinkedIconZone>
    </ContainerSide>
  );
}

export default Sidebar;
