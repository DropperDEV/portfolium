import Section from "../components/Section";
import TextBox from "../components/TextBox";
import TitleMain from "../ui/TitleMain";
import TwoColumsSection from "../ui/TwoColumsSection";
import { TbWorldUpload } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { TbMathFunction } from "react-icons/tb";
import SectionItem from "../ui/SectionItem";
import styled from "styled-components";
import { colors, gradients, typography } from "../utils/StyleVars";

const StyledBigContainer = styled.div`
  background: ${gradients.bgGradientJet};
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  border-radius: 15px;
`;

const StyledHalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledSkillList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: px;
  grid-row-gap: 20px;
  padding: 20px;
`;

const StyledSkillListTitle = styled.p`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: ${typography.fw600};
  text-align: center;
`;

const StyledSkillItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const StyledSkillWrapperTitle = styled.div`
  display: flex;
  gap: 4px;

  p:first-child {
    font-weight: ${typography.fw600};
    font-size: ${typography.fs6};
  }
  p {
    color: ${colors.lightGray};
    font-size: ${typography.fs7};
    font-weight: ${typography.fw300};
  }
`;

const StyledSkillProgress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 7px;
  background: ${colors.jet}; /* Cor de fundo da barra de progresso */
  border: none;
  border-radius: 10px;
  color: ${colors.orange}; /* Cor de fundo da barra de progresso não preenchida */

  &::-webkit-progress-bar {
    color: ${colors.orange}; /* Cor de fundo da barra de progresso não preenchida */
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    color: ${colors.orange}; /* Cor da parte preenchida da barra de progresso */
    border-radius: 10px;
  }

  &:-moz-progress-bar {
    color: ${colors.orange}; /* Cor da parte preenchida da barra de progresso */
    border-radius: 10px;
  }
`;

function About() {
  return (
    <>
      <TitleMain text="Sobre mim" />
      <TextBox />
      <Section title={"Meu foco atual"}>
        <TwoColumsSection>
          <SectionItem
            icon={<TbWorldUpload  />}
            title={"Web designer e desenvolvimento"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<FaMobileScreenButton  />}
            title={"Aplicativos móveis e jogos"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<TbMathFunction  />}
            title={"Algoritmos e soluções"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates. "
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear  />}
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
            icon={<TbMathFunction  />}
            title={"Notions com dicas de javascript"}
            text={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quam uptates, "
            }
          />
          <SectionItem
            icon={<BsDatabaseFillGear  />}
            title={"Participação em olimpiadas acadêmicas"}
            text={
              "sit amet consectetur, adipisicing elit. Ex quam uptates. "
            }
          />
        </TwoColumsSection>
      </Section>
      <Section title="Linguagems">
        <StyledBigContainer>
          <StyledHalfContainer>
            <StyledSkillListTitle>linguagems de código</StyledSkillListTitle>
            <StyledSkillList>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
            </StyledSkillList>
          </StyledHalfContainer>
          <StyledHalfContainer>
            <StyledSkillListTitle>linguagems de código</StyledSkillListTitle>
            <StyledSkillList>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress max={100} value={80}></StyledSkillProgress>
              </StyledSkillItem>
            </StyledSkillList>
          </StyledHalfContainer>
        </StyledBigContainer>
      </Section>
    </>
  );
}

export default About;
