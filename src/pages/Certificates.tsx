import styled from "styled-components";
import TitleMain from "../ui/TitleMain";
import { PiMonitorBold } from "react-icons/pi";
import { colors, device, shadows, typography } from "../utils/StyleVars";
import certificates from "../service/certificatesData";
import CertificateItem from "../components/CertificateItem";

const StyledCertificateSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: flex-start;
  align-items: flex-start;
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

const StyledListCertificate = styled.ul`
  font-size: ${typography.fs6};
  margin-left: 52px;

  @media ${device.xs} {
    margin-left: 17%;
  }

  span {
    color: ${colors.orange};
    font-weight: ${typography.fw400};
    line-height: 1.6;
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
          {certificates.map((certificate, index) => (
            <CertificateItem
              key={index}
              title={certificate.title}
              imgSrc={certificate.imgSrc}
              institution={certificate.institution}
            />
          ))}
        </StyledListCertificate>
      </StyledCertificateSection>
    </>
  );
}

export default Certificates;
