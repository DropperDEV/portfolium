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
  height: 620px;
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
    height: ${props => props.$active ? '405px' : 'auto'}
    
    
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
    margin: 0px;
    margin-top: 5px;
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
    box-shadow: 0 0 0.5px #fff, 0 0 1px #fff, 0 0 2px #fff,
    0 0 4px hsla(45, 100%, 90%, 0.5), 0 0 7px hsla(45, 100%, 90%, 0.5),
    0 0 10px hsla(45, 100%, 90%, 0.5), 0 0 12px hsla(45, 100%, 90%, 0.5),
    0 0 15px hsla(45, 100%, 90%, 0.5);
  }
  to {
    box-shadow: 0 0 2.5px #ffffff0e;
  }
}
`;

const Button = styled.button`
  display: none;
  visibility: hidden;
  transition: 0.25s ease;
  

  &:before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: deeppink;
    transition: orange;
    z-index: -1;
  }

  &:hover,
  &:focus {
    background: greenyellow;
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
    padding: 5px 12px;
    padding-top: 8px;
  }
`;

const Separator = styled.div<{ $visible?: boolean; $active: boolean}>`
  width: 175px;
  height: 1px;
  background: black;
  margin: 15px 0px;
  visibility: ${props => props.$visible ? "visible" : "hidden"};

  @media ${device.lg}{
    width: 93%;
    visibility: visible;
    display: ${props => props.$active ? "block" : "none"};
  }
`;


const InfoSection = styled.section<{$active: boolean;}>`
  display: ${props => props.$active ? "grid" : "none"};
  grid-template-columns: 1fr;
  gap: 30px;
  transition: 0.5s ease-in-out;

  @media ${device.lg}{
    display: grid;
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
  display: ${props => props.$active ? "flex" : "none"};
  align-items: center;
  min-width: 100%;
  gap: 16px;

  @media ${device.lg}{
    min-width: 100%;
    width: fit-content;
    justify-content: flex-start;
  }
`;

const ItemInfo = styled.div<{$active: boolean;}>`
  display: ${props => props.$active ? "flex" : "none"};
  flex-direction: column;
`;

const ItemTitle = styled.p<{$active: boolean;}>`
  display: ${props => props.$active ? "flex" : "none"};
  color: #c6a6a6;
  font-weight: 600;
  font-size: smaller;
  margin: 0px;
  text-transform: uppercase;
`;

const ItemBody = styled.p<{$active: boolean;}>`
  display: ${props => props.$active ? "flex" : "none"};
  font-size: small;
  margin: 0px;
  font-weight: 600;
`;
const ContainerIconItem = styled.div<{$active: boolean;}>`
  display: ${props => props.$active ? "flex" : "none"};

  position: relative;
  justify-content: center;
  align-items: center;
  background-color: brown;
  border-radius: 15px;
  height: 45px;
  width: 45px;
  z-index: 1;
`;

const LinkedIconZone = styled.div<{$active: boolean;}>`
  display: ${props => props.$active ? "flex" : "none"};
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  
  @media ${device.lg}{
    margin-top: 8px;
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
          <FaLinkedin  />
        </a>
        <a href="https://github.com/DropperDEV" target="_blank">
          <FaGithub  />
        </a>
      </LinkedIconZone>
    </ContainerSide>
  );
}

export default Sidebar;
