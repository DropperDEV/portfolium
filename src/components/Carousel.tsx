import { useState } from "react";
import styled from "styled-components";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { colors, device, gradients } from "../utils/StyleVars";
// import Skills from "../service/skillsData.js"
import SkillsData from "../service/skillsData.ts";

interface Skill {
  img: string;
  name: string;
}

interface CardContainerProps {
   "--active": number;
   "--offset": number;
   "--direction": number;
   "--abs-offset": number;
}

const CarouselContainer = styled.div`
  background: ${gradients.bgGradientJet};
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: 240px;
  perspective: 50%;
  transform-style: preserve-3d;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  overflow: hidden;
`;

const CardContainer = styled.div<CardContainerProps>`
  position: absolute;
  transform: rotateY(calc(var(--offset) * 60deg))
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -5rem));
  filter: grayscale(var(--active));
  transition: all 0.3s ease-out;
  justify-self: center;
`;

const Card = styled.div`
  img {
    width: 140px;
    height: 140px;
  }
  transition: all 0.3s ease-out;

  @media ${device.md} {
    img {
      width: 100px;
      height: 100px;
    }
  }
  @media ${device.sm} {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

const NavButton = styled.button<{ direction: string }>`
  color: ${colors.orange};
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
  ${({ direction }) =>
    direction === "left"
      ? "transform: translateX(0%) translateY(-50%);"
      : "right: 0; transform: translateX(0%) translateY(-50%);"}
`;

const MAX_VISIBILITY = 2.8;

const CARDS = SkillsData.length;
const Skills: Skill[] = SkillsData;

export default function Carousel() {
  const [active, setActive] = useState(2);
  const count = CARDS;

  return (
    <CarouselContainer>
      {active > 0 && (
        <NavButton
          className="left"
          direction="left"
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </NavButton>
      )}
      {Skills.map((skill, index: number) => (
        <CardContainer
          key={index}
          style={{
                    // @ts-expect-error i dont know why this error and it work fine so whatever
            "--active": index === active ? 0 : 1,
            "--offset": (active - index) / 3,
            "--direction": Math.sign(active - index),
            "--abs-offset": Math.abs(active - index) / 3,
            pointerEvents: active === index ? "auto" : "none",
            opacity: Math.abs(active - index) >= MAX_VISIBILITY ? "0" : "1",
            display:
              Math.abs(active - index) > MAX_VISIBILITY ? "none" : "block",
            overflow: "hidden",
          }}
        >
          <Card>
            <img src={skill.img} alt={skill.name} />
          </Card>
        </CardContainer>
      ))}

      {active < count - 1 && (
        <NavButton
          className="right"
          direction="right"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </NavButton>
      )}
    </CarouselContainer>
  );
}
