import { useState } from "react";
import styled from "styled-components";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { colors, device, gradients } from "../utils/StyleVars";

const Skills = [
  {
    name: "javascript",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  {
    name: "css",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
  },
  {
    name: "html",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
  },
  {
    name: "react",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "typescript",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "java",
    img: "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
  },
  {
    name: "c++",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    name: "sql",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/744px-Database-mysql.svg.png",
  },
  {
    name: "npm",
    img: "https://www.svgrepo.com/show/439240/npm.svg",
  },
  {
    name: "github",
    img: "https://cdn-icons-png.flaticon.com/512/889/889192.png",
  },
  {
    name: "figma",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
];

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

const CardContainer = styled.div`
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

const CARDS = Skills.length;

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
      {Skills.map((skill, index) => (
        <CardContainer
          key={index}
          style={{
            "--active": index === active ? 0 : 1,
            "--offset": (active - index) / 3,
            "--direction": Math.sign(active - index),
            "--abs-offset": Math.abs(active - index) / 3,
            "pointerEvents": active === index ? "auto" : "none",
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
