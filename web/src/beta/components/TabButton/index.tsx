// TabButton.tsx
import type { FC } from "react";

import { styled } from "@reearth/services/theme";

// 以下のようなPropsでお願いします
export type Props = {
  label: string;
  selected: boolean;
  width?: string;
  onClick: () => void;
};

const TabButton: FC<Props> = ({ label, selected, onClick, width }) => {
  const defaultWidth = "67px";
  return (
    <StyledButton onClick={onClick} width={width ? width : defaultWidth}>
      <StyledText selected={selected}>{label}</StyledText>
    </StyledButton>
  );
};
const StyledButton = styled.button<{
  width: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 10px;

  position: absolute;
  width: ${({ width }) => width};
  height: 35px;
  left: 0px;
  top: 0px;

  background: #232226;
  border-radius: 4px;
  :hover {
    background: #38383b;
  }
`;

type TextProps = {
  selected: boolean;
};

const StyledText = styled.text<TextProps>`
  width: 100%;
  height: 19px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  text-align: center;

  color: ${({ selected }) => (selected ? "#c7c5c5" : "#4A4A4A")};

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export default TabButton;
