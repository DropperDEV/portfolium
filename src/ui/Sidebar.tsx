import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContainerSide = styled.aside`
  background-color: red;
  width: 200px;
  height: 550px;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid wheat;
  margin-top: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 15px;
  margin-top: 5px;
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
  padding: 4px 50px 4.8px 50px;
  text-align: center;
  margin: 0px;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
`;

const Separator = styled.div`
  width: 160px;
  height: 1px;
  background: black;
  margin: 30px 0px;
`;

const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 150px;
`;
const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
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
`;

const ItemBody = styled.p`
  font-size: small;
  margin: 0px;
  font-weight: 600;
`;
const ContainerIconItem = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  align-items: center;
  background-color: brown;
  border-radius: 15px;
  height: 45px;
  width: 45px;
`;

const LinkedIconZone = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

function Sidebar() {
  return (
    <ContainerSide>
      <StyledImage src="/JamesPhoto.png" alt="James Costa" />
      <ContainerTitle>
        <StyledTitle>James Costa</StyledTitle>
        <StyledSubTitle>Hello, world!</StyledSubTitle>
      </ContainerTitle>
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
