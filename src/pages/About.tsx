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
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<FaMobileScreenButton size={70} />}
            title={"Aplicativos móveis e jogos"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<TbMathFunction size={70} />}
            title={"Algoritmos e soluções"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates. "
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear size={70} />}
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
            icon={<TbMathFunction size={70} />}
            title={"Notions com dicas de javascript"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear size={70} />}
            title={"Participação em olimpiadas acadêmicas"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates. "
            }
          />
        </TwoColumsSection>
      </Section>
    </>
  );
}

export default About;
