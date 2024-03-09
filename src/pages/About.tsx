import Section from "../components/Section";
import TextBox from "../components/TextBox";
import TitleMain from "../ui/TitleMain";
import TwoColumsSection from "../ui/TwoColumsSection";
import { TbWorldUpload } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { TbMathFunction } from "react-icons/tb";
import SectionItem from "../ui/SectionItem";

function About() {
  return (
    <>
      <TitleMain text="Sobre mim" />
      <TextBox />
      <Section title={"Meu foco atual"}>
        <TwoColumsSection>
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
        </TwoColumsSection>
      </Section>
      <Section title="Profissional com pessoal">
        <TwoColumsSection>
          <SectionItem
            icon={<TbMathFunction size={70} />}
            title={"Notions com dicas de javascript"}
            text={
              "Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications. "
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear size={70} />}
            title={"Participação em olimpiadas acadêmicas"}
            text={
              "Creating attractive, easy-to-use websites that work well for businesses and individuals online. "
            }
          />
        </TwoColumsSection>
      </Section>
    </>
  );
}

export default About;
