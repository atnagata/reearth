import Text from "@reearth/beta/components/Text";
import { SwitchField } from "@reearth/beta/hooks/useManageSwitchState/hooks";
import { styled, useTheme } from "@reearth/services/theme";

type CustomField = {
  name: string;
};
type SwitchCustomField = SwitchField<CustomField>;

export type Props = {
  items: SwitchCustomField[];
  onChange?: (id: string) => void;
};
const SubTabButtonList: React.FC<Props> = ({ items, onChange }) => {
  const theme = useTheme();
  return (
    <>
      {items.map((item, index) => (
        <SubTabButton key={index} disabled={!!item?.active} onClick={() => onChange?.(item.id)}>
          <Text size="footnote" color={theme.general.content.main}>
            {item.name}
          </Text>
        </SubTabButton>
      ))}
    </>
  );
};

const SubTabButton = styled.button<{ disabled: boolean }>`
  background: ${({ disabled, theme }) => (disabled ? theme.general.select : "inherit")};
  padding: 8px;
  height: 32px;
  border-radius: 4px 4px 0px 0px;
  transition: all 0.5s;
  :hover {
    background: ${({ theme }) => theme.general.select};
  }
  text-align: center;
`;

export default SubTabButtonList;
