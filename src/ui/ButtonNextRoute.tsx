import { Link } from "react-router-dom";
import styled from "styled-components";
import { gradients, shadows } from "../utils/StyleVars";

interface IButtonNextRoute {
  to: string;
}

const StyledButton = styled(Link)`
  background: ${gradients.bgGradientJet};
  color: aliceblue;
  box-shadow: ${shadows.shadow2};
  padding: 10px 20px;
  border-radius: 15px;
`;
function ButtonNextRoute({ to }: IButtonNextRoute) {
  return <StyledButton to={`/portfolium${to}`}>Proximo</StyledButton>;
}

export default ButtonNextRoute;
