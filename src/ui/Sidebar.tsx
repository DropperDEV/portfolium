import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { device } from "../utils/breakpoints";
import { IoSwapVertical } from "react-icons/io5";
import { useState } from "react";

interface ContainerSideProps {
  active: boolean;
}

const ContainerSide = styled.aside<ContainerSideProps>`
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

  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.lg} {
    width: 900px;
    height: 180px;
    align-items: baseline;
    padding: 4px;
    //max-height: ${(props) => (props.active ? '405px' : 'auto')};
    height: 405px;
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
  @media ${device.lg} {
    padding: 5px 20px;
  }
`;

const Button = styled.button`
  display: none;
  visibility: hidden;

  @media ${device.lg} {
    display: block;
    visibility: visible;
    position: absolute;
    top: -30px;
    right: 20px;
    border-radius: 0px 10px;
    color: green;
    background: yellow;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 1;
    padding: 5px 12px;
  }
`;

const Separator = styled.div`
  width: 175px;
  height: 1px;
  background: black;
  margin: 32px;
`;


const InfoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media ${device.lg}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    gap: 30px 15px;
  }
`;

const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  gap: 16px;
  
  
  @media ${device.lg}{
    min-width: 100%;
    width: fit-content;
    justify-content: flex-start;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.p`
  color: #c6a6a6;
  font-weight: 600;
  font-size: smaller;
  margin: 0px;
  text-transform: uppercase;
`;

const ItemBody = styled.p`
  font-size: small;
  margin: 0px;
  font-weight: 600;
`;
const ContainerIconItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: brown;
  border-radius: 15px;
  height: 45px;
  width: 45px;
  z-index: 1;
`;

const LinkedIconZone = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
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
    <ContainerSide active={active}>
      <MobileSideTitle>
        <StyledImage src="/JamesPhoto.png" alt="James Costa" />
        <ContainerTitle>
          <StyledTitle>James Costa</StyledTitle>
          <StyledSubTitle>Hello, world!</StyledSubTitle>
        </ContainerTitle>
        <Button onClick={() => setActive(!active)}>
          <IoSwapVertical size={25} />
        </Button>
      </MobileSideTitle>
      <Separator />
      <InfoSection>
        <ContainerItem>
          <ContainerIconItem>
            {" "}
            <img src="/icon/IconYear.svg" alt="Anos" />
          </ContainerIconItem>
          <ItemInfo>
            <ItemTitle>Idade</ItemTitle>
            <ItemBody>18 anos de idade</ItemBody>
          </ItemInfo>
        </ContainerItem>
        <ContainerItem>
          <ContainerIconItem>
            <img src="/icon/IconLocation.svg" alt="Localização" />
          </ContainerIconItem>
          <ItemInfo>
            <ItemTitle>Localização</ItemTitle>
            <ItemBody>Fortaleza, Brasil</ItemBody>
          </ItemInfo>
        </ContainerItem>
        <ContainerItem>
          <ContainerIconItem>
            <img src="/icon/IconPerson.svg" alt="Personalidade" />
          </ContainerIconItem>
          <ItemInfo>
            <ItemTitle>Personalidade</ItemTitle>
            <ItemBody>INTP-T</ItemBody>
          </ItemInfo>
        </ContainerItem>
      </InfoSection>
      <LinkedIconZone>
        <a
          href="https://www.linkedin.com/in/james-soares-costa/"
          target="_blank"
        >
          <FaLinkedin color="yellow" />
        </a>
        <a href="https://github.com/DropperDEV" target="_blank">
          <FaGithub color="yellow" />
        </a>
      </LinkedIconZone>
    </ContainerSide>
  );
}

export default Sidebar;
