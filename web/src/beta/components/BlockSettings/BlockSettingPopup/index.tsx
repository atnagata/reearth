import { ReactNode, RefObject, useRef, useEffect, useState } from "react";

import Icon from "@reearth/beta/components/Icon";
import Popup from "@reearth/beta/components/Popup";
import Text from "@reearth/beta/components/Text";
import { styled, useTheme } from "@reearth/services/theme";

export type Props = {
  wrapperRef: RefObject<HTMLDivElement>;
  open: boolean;
  icon: string;
  title: string;
  onClickClose?: () => void;
  onClickAway?: () => void;
  onEscapeKeyDown?: () => void;
  children: ReactNode;
};

const BlockSettingPopup: React.FC<Props> = ({
  wrapperRef,
  open,
  icon,
  title,
  onClickClose,
  onClickAway,
  onEscapeKeyDown,
  children,
}) => {
  const theme = useTheme();
  const [headerWidth, setHeaderWidth] = useState(0);
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childrenRef.current) {
      console.log(childrenRef.current?.getBoundingClientRect());
      setHeaderWidth(childrenRef.current?.getBoundingClientRect()["width"]);
    }
  }, [childrenRef]);

  return (
    <Popup
      wrapperRef={wrapperRef}
      onClickAway={onClickAway}
      onEscapeKeyDown={onEscapeKeyDown}
      open={open}>
      <Wrapper>
        <Header width={headerWidth}>
          <Title>
            <TitleIcon>
              <Icon icon={icon} size={12} color={theme.general.content.main} />
            </TitleIcon>
            <Text
              size="footnote"
              color={theme.general.content.main}
              otherProperties={{ wordBreak: "break-all" }}>
              {title}
            </Text>
          </Title>
          <CloseButton>
            <CloseIcon
              icon="cancel"
              size={16}
              color={theme.general.content.main}
              onClick={onClickClose}
            />
          </CloseButton>
        </Header>
        <Children ref={childrenRef}>{children}</Children>
      </Wrapper>
    </Popup>
  );
};

const Wrapper = styled.div`
  border-radius: 4px;
  border: 1px solid var(--dark-outline-weak, #4a4a4a);
  background: var(--dark-background-4, #2b2a2f);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Header = styled.div<{ width: number }>`
  width: ${props => props.width - 24}px;
  display: flex;
  padding: 4px 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-bottom: 1px solid ${props => props.theme.editor.popup.border};
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const TitleIcon = styled.div`
  width: 12px;
`;
const CloseButton = styled.div`
  width: 16px;
`;
const CloseIcon = styled(Icon)`
  cursor: pointer;
`;
const Children = styled.div`
  display: inline-block;
  vertical-align: top;
`;

export default BlockSettingPopup;
