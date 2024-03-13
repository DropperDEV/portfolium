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
import { colors, device, gradients, typography } from "../utils/StyleVars";

const StyledBigContainer = styled.div`
  background: ${gradients.bgGradientJet};
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 15px;
  padding: 20px;
  gap: 30px;

  @media ${device.xs} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
  
`;

const StyledHalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const StyledSkillList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
`;

const StyledSkillListTitle = styled.p`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: ${typography.fw600};
  text-align: center;

  @media ${device.md}{
    font-size: ${typography.fs4};
  }

  @media ${device.sm}{
    font-size: ${typography.fs5};
  }
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

const StyledSkillProgress = styled.div`
  min-width: 100%;
  height: 7px;
  background: ${colors.jet};
  border: none;
  border-radius: 10px;

  .inside-bar {
    background: rgb(255, 100, 0);
    background: linear-gradient(
      90deg,
      rgba(255, 100, 0, 1) 32%,
      rgba(180, 71, 0, 1) 74%,
      rgba(130, 51, 0, 1) 100%
    );
    max-width: 60%;
    height: 100%;
    border-radius: inherit;
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
        <StyledBigContainer>
          <StyledHalfContainer>
            <StyledSkillListTitle>Linguagens de código</StyledSkillListTitle>
            <StyledSkillList>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
            </StyledSkillList>
          </StyledHalfContainer>
          <StyledHalfContainer>
            <StyledSkillListTitle>Linguagens de código</StyledSkillListTitle>
            <StyledSkillList>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
              <StyledSkillItem>
                <StyledSkillWrapperTitle>
                  <p>Javascript</p>
                  <p>90%</p>
                </StyledSkillWrapperTitle>
                <StyledSkillProgress>
                  <div className="inside-bar"></div>
                </StyledSkillProgress>
              </StyledSkillItem>
            </StyledSkillList>
          </StyledHalfContainer>
        </StyledBigContainer>
      </Section>
    </>
  );
}

export default About;
