import type React from "react";

import Text from "@reearth/beta/components/Text";
import { styled, useTheme } from "@reearth/services/theme";

export type Props = {
  label: string;
  onClick?: () => void;
  selected?: boolean;
};

const TabButton: React.FC<Props> = ({ label, onClick, selected }) => {
  const theme = useTheme();

  return (
    <Button onClick={onClick} disabled={selected}>
      <Text
        size={"body"}
        weight={"bold"}
        color={selected ? theme.general.content.main : theme.general.content.weak}>
        {label}
      </Text>
    </Button>
  );
};

type ButtonProps = {
  disabled?: boolean;
};

const Button = styled.button<ButtonProps>`
  padding: 8px 12px;
  height: 35px;
  border-radius: 4px;
  background: ${props => (props.disabled ? props.theme.general.bg.weak : "inherit")};
  line-height: 19px;
  :hover {
    background: ${props => props.theme.general.bg.weak};
    transition: all 0.5s ease;
  }
`;

export default TabButton;
