import styled from "styled-components";
import { colors } from "../utils/StyleVars";

interface ITitleMain {
  text: string;
}
const StyledTitle = styled.h1`
  text-transform: capitalize;
  position: relative;
  padding-bottom: 15px;

  margin-bottom: 20px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 4px;
    background: ${colors.orange};
    border-radius: 3px;
  }
`;
function TitleMain({ text }: ITitleMain) {
  return <StyledTitle>{text}</StyledTitle>;
}

export default TitleMain;
