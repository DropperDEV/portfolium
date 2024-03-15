import Section from "../components/Section";
import TextBox from "../components/TextBox";
import TitleMain from "../ui/TitleMain";
import TwoColumsSection from "../ui/TwoColumsSection";
import { TbWorldUpload } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { TbMathFunction } from "react-icons/tb";
import SectionItem from "../ui/SectionItem";
import LanguageSection from "../components/LanguageSection";
import Carousel from "../components/Carousel";
import ButtonNextRoute from "../ui/ButtonNextRoute";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
`;
function About() {
  return (
    <>
      <TitleMain text="Sobre mim" />
      <TextBox />
      <Section title={"Meu foco atual"}>
        <TwoColumsSection>
          <SectionItem
            icon={<TbWorldUpload />}
            title={"Web designer e desenvolvimento"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<FaMobileScreenButton />}
            title={"Aplicativos móveis e jogos"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<TbMathFunction />}
            title={"Algoritmos e soluções"}
            text={
              ". Ex quam uptates, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates. "
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear />}
            title={"Banco de dados"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
        </TwoColumsSection>
      </Section>
      <Section title="Profissional com pessoal">
        <TwoColumsSection>
          <SectionItem
            icon={<TbMathFunction />}
            title={"Notions com dicas de javascript"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear />}
            title={"Participação em olimpiadas acadêmicas"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates. "
            }
          />
        </TwoColumsSection>
      </Section>
      <Section title="Linguagens">
        <LanguageSection />
      </Section>
      <Section title="Habilidades de desenvolvimento">
        <Carousel />
      </Section>
      <StyledButtonContainer>
        <ButtonNextRoute to="/projects" />
      </StyledButtonContainer>
    </>
  );
}

export default About;
