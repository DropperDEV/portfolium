import { colors, gradients, typography } from "../utils/StyleVars";
import styled from "styled-components";
import { useState } from "react";

const StyledTextBox = styled.section<{ $active: boolean }>`

  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${gradients.bgGradientJet};
  padding: 30px;
  border-radius: 14px;
  max-height: ${(props) => (props.$active ? "max-content" : "min-content")};


  p:first-child {
    display: block;
    text-overflow: ellipsis;
  }
  p {
    margin-bottom: 15px;
    color: ${colors.lightGray};
    font-size: ${typography.fs6};
    font-weight: ${typography.fw300};
    line-height: 1.6;
    display: ${(props) => (props.$active ? "block" : "none")};
  }

  button {
    font-size: ${typography.fs7};
    color: white;
    animation: float 4s ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(10px);
      }
      100% {
        transform: translatey(0px);
      }
    }
  }
`;

export default function TextBox() {
    const [active, setActive] = useState<boolean>(false);
  return (
    <StyledTextBox $active={active}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          expedita at facere rerum eos repellendus perferendis corrupti odit,
          eius optio accusamus vel asperiores nostrum sit velit? Sint
          praesentium maiores illo.lorem Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus debitis nisi odit quas rerum recusandae
          inventore dignissimos? Quis error architecto excepturi temporibus
          placeat soluta quos quas. Numquam amet nobis molestias!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          expedita at facere rerum eos repellendus perferendis corrupti odit,
          eius optio accusamus vel asperiores nostrum sit velit? Sint
          praesentium maiores illo.lorem Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus debitis nisi odit quas rerum recusandae
          inventore dignissimos? Quis error architecto excepturi temporibus
          placeat soluta quos quas. Numquam amet nobis molestias!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          expedita at facere rerum eos repellendus perferendis corrupti odit,
          eius optio accusamus vel asperiores nostrum sit velit? Sint
          praesentium maiores illo.lorem Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus debitis nisi odit quas rerum recusandae
          inventore dignissimos? Quis error architecto excepturi temporibus
          placeat soluta quos quas. Numquam amet nobis molestias!
        </p>

        <button onClick={() => setActive(!active)}>
          {active ? "⬆️  Esconder texto  ⬆️" : "⬇️  Mostrar mais  ⬇️"}
        </button>
      </StyledTextBox>
  )
}
