import styled from "styled-components";
import TitleMain from "../ui/TitleMain";
import { PiMonitorBold } from "react-icons/pi";
import { colors, shadows, typography } from "../utils/StyleVars";

const StyledCertificateSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: flex-start; /* Change this */
  align-items: flex-start; /* Change this */
`;
const StyledWrapperCertificateTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;

  h3 {
    font-size: 24px;
  }
`;
const ContainerIconItem = styled.div`
  display: flex;
  box-shadow: ${shadows.shadow5};
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blueNavy};
  border-radius: 15px;
  height: 45px;
  width: 45px;
  z-index: 1;
  transition: 0.5s ease-in-out;

  .icon {
    color: ${colors.orange};
  }
`;

const StyledItemContainer = styled.li`
  position: relative;
  &:not(:last-child)::before {
    content: "";
    position: absolute;
    top: -35px;
    left: -30px;
    width: 1px;
    height: calc(100% + 50px);
    background: black;
  }

  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: -33px;
    height: 6px;
    width: 6px;
    background: ${colors.orange};
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${colors.jet};
  }

  .fromWhere {
    color: ${colors.lightGray70};
    margin-top: 8px;
    font-weight: ${colors.fw300};
    line-height: 1.6;
  }
`;

const StyledListCertificate = styled.ul`
  font-size: ${typography.fs6};
  margin-left: 52px;

  span {
    color: ${colors.orange};
    font-weight: ${typography.fw400};
    line-height: 1.6;
  }
`;

const StyledCertificateContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 5px;
  border: 10px solid black;
  box-sizing: border-box;

  img {
    display: block;
    width: 220px;
    height: auto;
  }

  &:hover img {
    transform: scale(1.05);
    cursor: zoom-in;
    transition: transform 0.5s ease;
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #000;
    pointer-events: none;
    box-sizing: border-box;
  }
`;
function Certificates() {
  return (
    <>
      <TitleMain text="Meus Certificados" />
      <StyledCertificateSection>
        <StyledWrapperCertificateTitle>
          <ContainerIconItem>
            <PiMonitorBold size={20} className="icon" />
          </ContainerIconItem>
          <h3>Competências Técnicas</h3>
        </StyledWrapperCertificateTitle>
        <StyledListCertificate>
          <StyledItemContainer>
            <h4>Formação React Developer</h4>
            <p className="fromWhere">DIO - Digital Innovation One</p>
            <StyledCertificateContainer>
              <img
                src="./c_freactdeveloper.png"
                alt="Formação React Developer"
                onClick={() => window.open("./c_freactdeveloper.png")}
              />
            </StyledCertificateContainer>
          </StyledItemContainer>
          <StyledItemContainer>
            <h4>Formação React Developer</h4>
            <p className="fromWhere">DIO - Digital Innovation One</p>
            <StyledCertificateContainer>
              <img
                src="./c_freactdeveloper.png"
                alt="Formação React Developer"
                onClick={() => window.open("./c_freactdeveloper.png")}
              />
            </StyledCertificateContainer>
          </StyledItemContainer>
          <StyledItemContainer>
            <h4>Formação React Developer</h4>
            <p className="fromWhere">DIO - Digital Innovation One</p>
            <StyledCertificateContainer>
              <img
                src="./c_freactdeveloper.png"
                alt="Formação React Developer"
                onClick={() => window.open("./c_freactdeveloper.png")}
              />
            </StyledCertificateContainer>
          </StyledItemContainer>
        </StyledListCertificate>
      </StyledCertificateSection>
    </>
  );
}

export default Certificates;
