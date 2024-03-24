import styled from "styled-components";
import TitleMain from "../ui/TitleMain";
import { device, gradients, typography } from "../utils/StyleVars";
import TextCopy from "../components/TextCopy";
import { GrSchedule } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledContainerContact = styled.article`
  background: ${gradients.bgGradientJet};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 30px;
  gap: 2rem;
  margin-bottom: 5rem;

    margin-top: 60px;
  

  h3 {
    font-size: ${typography.fs1};
    text-transform: capitalize;
  }

  a {
    color: aliceblue;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  @media ${device.sm}{
    h3{
      font-size: ${typography.fs3};
    }
  }
`;

function handleScheduleClick(event) {
  event.preventDefault();
  Calendly.initPopupWidget({ url: "https://calendly.com/jamescosta4747" });
}

function Contact() {
  return (
    <>
      <TitleMain text="Contato" />
      <StyledContainerContact>
        <h3>Email:</h3>
        <TextCopy text="jamescosta4747@gmail.com" />
      </StyledContainerContact>
      <StyledContainerContact>
        <h3>Agende uma chamada de vídeo comigo:</h3>
        <a href="#" onClick={handleScheduleClick}>
          <GrSchedule size={100} />
        </a>
      </StyledContainerContact>
      <StyledContainerContact>
        <h3>Rede Sociais:</h3>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/james-soares-costa/"
            target="_blank"
          > <FaLinkedin size={70} />
          </a>
          <a
            href="https://github.com/DropperDEV?tab=repositories"
            target="_blank"
          >
                       <FaGithub size={70} />

          </a>
        </div>
      </StyledContainerContact>
    </>
  );
}

export default Contact;
