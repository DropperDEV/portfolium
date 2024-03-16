/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

interface IButtonContainer {
  children: any;
}
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
`;
function ButtonContainer({ children }: IButtonContainer) {
  return <StyledButtonContainer>{children}</StyledButtonContainer>;
}

export default ButtonContainer;
