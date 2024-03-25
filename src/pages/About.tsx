import Section from "../ui/Section";
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
import ButtonContainer from "../ui/ButtonContainer";

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
              "Criei interfaces interativas com o usuário, e responsivas."
            }
          />
          <SectionItem
            icon={<FaMobileScreenButton />}
            title={"Aplicativos móveis e jogos"}
            text={
              "Fiz um jogo em low code na plantaforma GDevelop, desenvolvendo minha abstração."
            }
          />
          <SectionItem
            icon={<TbMathFunction />}
            title={"Algoritmos e soluções"}
            text={
              "Estudei por muito tempo estrutura de dados, algoritmos com a linguagem c++."
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear />}
            title={"Banco de dados"}
            text={
              "No colégio criei programas em python de CRUD, com MySQL e PhpAdmin"
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
              "Estou escrevendo um notion com tudo que é mais importante no javascript para web"
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear />}
            title={"Participação em olimpiadas acadêmicas"}
            text={
              "Participei de diversas olimpiadas, trazendo resultado para a escola com medalhas. Minha principal atuação foi na OBBiotec"
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
      <ButtonContainer>
        <ButtonNextRoute to="/projects" />
      </ButtonContainer>
    </>
  );
}

export default About;
