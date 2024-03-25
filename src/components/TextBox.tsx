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
  margin-bottom: 40px;

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
        Sou um programador dedicado com mais de um ano e meio de experiência em
        estudo de tecnologias e lógica de programação. Atualmente, estou focado
        em aprimorar minhas habilidades em Java e Spring, buscando oportunidades
        de estágio para expandir meu conhecimento nessa área. Possuo amplo
        domínio em React e TypeScript no desenvolvimento front-end, o que me
        permite contribuir de forma significativa em projetos de desenvolvimento
        de software.
      </p>
      <p>
        Além da minha paixão pela tecnologia, também sou entusiasta de
        investimentos. Tenho interesse em diversos tipos de investimentos,
        incluindo criptomoedas e renda fixa. Acredito na diversificação da
        carteira de investimentos como uma estratégia sólida para alcançar
        objetivos financeiros a longo prazo. Acompanho de perto o mercado de
        criptomoedas e estou sempre em busca de oportunidades de investimento
        promissoras nesse setor em constante evolução.
      </p>
      <p>
        Fora do mundo da tecnologia e dos investimentos, gosto de relaxar
        jogando CS:GO (Counter-Strike: Global Offensive). É uma forma divertida
        de desafiar minha habilidade estratégica e trabalho em equipe. Embora
        leve meus estudos e carreira a sério, também entendo a importância de
        momentos de lazer para recarregar as energias e manter o equilíbrio
        entre trabalho e diversão.
      </p>
      <button onClick={() => setActive(!active)}>
        {active ? "⬆️  Esconder texto  ⬆️" : "⬇️  Mostrar mais  ⬇️"}
      </button>
    </StyledTextBox>
  );
}
