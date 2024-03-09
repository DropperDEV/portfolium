import styled from "styled-components";
import TextBox from "../components/TextBox";
import TitleMain from "../ui/TitleMain";
import { colors, gradients, shadows, typography } from "../utils/StyleVars";
import { TbWorldUpload } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { TbMathFunction } from "react-icons/tb";import SectionItem from "../components/SectionItem";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const StyledTwoColumSectionGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  list-style: none;
`;

const StyledSectionTitle = styled.p`
  font-size: ${typography.fs1};
  font-weight: ${typography.fw600};
`;

function About() {
  return (
    <>
      <TitleMain text="Sobre mim" />
      <TextBox />
      <StyledSection>
        <StyledSectionTitle>Meu foco atual</StyledSectionTitle>
        <StyledTwoColumSectionGrid>
          <SectionItem
            icon={<TbWorldUpload size={70} />}
            title={"Web designer e desenvolvimento"}
            text={
              "Creating attractive, easy-to-use websites that work well for businesses and individuals online. "
            }
          />
          <SectionItem
            icon={<FaMobileScreenButton size={70} />}
            title={"Aplicativos móveis e jogos"}
            text={
              "Creating and developing engaging mobile apps and games for iOS and Android devices. "
            }
          />
          <SectionItem
            icon={<TbMathFunction size={70} />}
            title={"Algoritmos e soluções"}
            text={
              "Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications. "
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear size={70} />}
            title={"Banco de dados"}
            text={
              "Creating attractive, easy-to-use websites that work well for businesses and individuals online. "
            }
          />
        </StyledTwoColumSectionGrid>
      </StyledSection>
    </>
  );
}

export default About;
