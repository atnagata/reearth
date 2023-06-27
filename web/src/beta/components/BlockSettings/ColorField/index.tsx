import { RgbaColorPicker } from "react-colorful";
import { usePopper } from "react-popper";

import Button from "@reearth/beta/components/Button";
import Text from "@reearth/beta/components/Text";
import { useT } from "@reearth/services/i18n";
import { metricsSizes, styled, css } from "@reearth/services/theme";

import useHooks from "./hooks";
import "./styles.css";

export type Props = {
  value?: string;
  onChange?: (value: string | undefined) => void;
};

const ColorField: React.FC<Props> = ({ value, onChange }) => {
  const t = useT();
  const {
    wrapperRef,
    pickerRef,
    colorState,
    open,
    rgba,
    handleClose,
    handleSave,
    handleHexSave,
    handleChange,
    handleRgbaInput,
    handleHexInput,
    handleClick,
    handleKeyDown,
  } = useHooks({ value, onChange });

  const { styles, attributes } = usePopper(wrapperRef.current, pickerRef.current, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
      {
        name: "eventListeners",
        enabled: !open,
        options: {
          scroll: false,
          resize: false,
        },
      },
    ],
  });

  return (
    <Wrapper ref={wrapperRef}>
      <InputWrapper>
        <Layers onClick={handleClick}>
          <CheckedPattern />
          <Swatch c={colorState || "transparent"} />
        </Layers>
        <Input
          value={colorState || ""}
          placeholder={t("#RRGGBBAA")}
          onChange={handleHexInput}
          onKeyDown={handleKeyDown}
          onBlur={handleHexSave}
        />
      </InputWrapper>
      <PickerWrapper ref={pickerRef} open={open} style={styles.popper} {...attributes.popper}>
        <RgbaColorPicker className="colorPicker" color={rgba} onChange={handleChange} />
        <RgbaInputWrapper>
          <Field>
            <Input
              name="r"
              type="number"
              value={rgba.r}
              min={0}
              max={255}
              onChange={handleRgbaInput}
            />
            <PickerText size="xFootnote" color={colors.text}>
              {t("Red")}
            </PickerText>
          </Field>
          <Field>
            <Input
              name="g"
              type="number"
              value={rgba.g}
              min={0}
              max={255}
              onChange={handleRgbaInput}
            />
            <PickerText size="xFootnote" color={colors.text}>
              {t("Green")}
            </PickerText>
          </Field>
          <Field>
            <Input
              name="b"
              type="number"
              value={rgba.b}
              min={0}
              max={255}
              onChange={handleRgbaInput}
            />
            <PickerText size="xFootnote" color={colors.text}>
              {t("Blue")}
            </PickerText>
          </Field>
          <Field>
            <Input
              name="a"
              type="number"
              value={rgba.a ? Math.round(rgba.a * 100) : undefined}
              onChange={handleRgbaInput}
            />
            <PickerText size="xFootnote" color={colors.text}>
              {t("Alpha")}
            </PickerText>
          </Field>
        </RgbaInputWrapper>
        <FormButtonGroup>
          <Button buttonType="secondary" text={t("Cancel")} onClick={handleClose} />
          <Button buttonType="primary" text={t("Save")} onClick={handleSave} />
        </FormButtonGroup>
      </PickerWrapper>
    </Wrapper>
  );
};

export default ColorField;

const colors = {
  background: "#2B2A2F",
  border: "#4A4A4A",
  check: "#2B2A2F",
  placeholder: "#4A4A4A",
  focusBorder: "#A0A0A0",
  text: "#C7C5C5",
};

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  background: ${colors.background};
`;

const Layers = styled.div`
  position: relative;
  min-width: 28px;
  min-height: 28px;
  border-radius: 2px;
`;

const layerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const check = (color: string) => `
linear-gradient(
  45deg,
  ${color} 25%,
  transparent 25%,
  transparent 75%,
  ${color} 25%,
  ${color}
)
`;

const CheckedPattern = styled.div`
  background-color: ${colors.border};
  background-image: ${check(colors.check)}, ${check(colors.check)};
  background-position: 0 0, 6px 6px;
  background-size: 12px 12px;
  ${layerStyle};
`;

const Swatch = styled.div<{ c?: string }>`
  background: ${({ c }) => c || "transparent"};
  ${layerStyle};
`;

const PickerWrapper = styled.div<{ open: boolean }>`
  ${({ open }) =>
    !open &&
    css`
      visibility: hidden;
      pointer-events: none;
    `}
  width: 286px;
  cursor: default;
  padding: 0;
  box-sizing: border-box;
  border: solid 1px ${colors.border};
  border-radius: 5px;
  background: ${colors.background};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  z-index: ${props => props.theme.zIndexes.propertyFieldPopup};
`;

const FormButtonGroup = styled.div`
  margin-right: 5px;
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  flex: 1;
`;

const Input = styled.input<{ type?: string }>`
  width: 100%;
  height: 30px;
  padding: 6px ${metricsSizes["s"]}px;
  background: ${colors.background};
  box-sizing: border-box;
  color: ${colors.text};
  outline: none;
  border: 1px solid ${colors.border};
  &:focus {
    border-color: ${colors.focusBorder};
  }
  ::placeholder {
    color: ${colors.placeholder};
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const PickerText = styled(Text)`
  user-select: none;
  overflow: hidden;
`;

const RgbaInputWrapper = styled.div`
  display: flex;
  width: 256px;
  margin: 0 auto;
`;
