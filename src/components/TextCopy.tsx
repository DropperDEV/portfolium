import React, { useState } from 'react';
import styled from "styled-components";
import { colors } from '../utils/StyleVars';

interface ITextCopy {
  text: string;
}

const StyledEmail = styled.div`
  display: flex;
  align-items: center;
  background-color: hsla(0, 0%, 22%, 0.514);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  font-size: 13px;
  padding: 8px;

  p {
    flex-grow: 1;
    margin-right: 5px;
    color: hsl(0, 0%, 100%);
  }

  button {
    background-color: ${colors.eerieBlack1};
    color:  ${colors.orange};
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: ${colors.blueNavy};
  }
`;

function TextCopy({ text }: ITextCopy) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const range = document.createRange();
    const email = document.querySelector(".email-text");
    if (email) {
      range.selectNode(email);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
      setCopied(!copied);
      setTimeout(() => {
        setCopied(false);
      }, 500); 
    }
  };

  return (
    <StyledEmail>
      <p className="email-text">{text}</p>
      <button onClick={copyEmail}>{copied ? 'Copiado!' : 'Copiar'}</button>
    </StyledEmail>
  );
}

export default TextCopy;
