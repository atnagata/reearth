import { ReactNode } from "react";

import { styled } from "@reearth/services/theme";

import useHooks from "./hooks";

type Props = {
  children?: ReactNode;
  direction: "vertical" | "horizontal";
  gutter: "start" | "end";
  size: number;
  minSize?: number;
  maxSize?: number;
};

const Resizable: React.FC<Props> = ({
  direction,
  gutter,
  size: initialSize,
  minSize,
  maxSize,
  children,
}) => {
  const { size, gutterProps } = useHooks(direction, gutter, initialSize, minSize, maxSize);

  const showTopGutter = direction === "horizontal" && gutter === "start";
  const showRightGutter = direction === "vertical" && gutter === "end";
  const showBottomGutter = direction === "horizontal" && gutter === "end";
  const showLeftGutter = direction === "vertical" && gutter === "start";

  const TopGutter = showTopGutter ? <HorizontalGutter {...gutterProps} /> : null;
  const RightGutter = showRightGutter ? <VerticalGutter {...gutterProps} /> : null;
  const BottomGutter = showBottomGutter ? <HorizontalGutter {...gutterProps} /> : null;
  const LeftGutter = showLeftGutter ? <VerticalGutter {...gutterProps} /> : null;

  return (
    <StyledResizable direction={direction} size={size}>
      {TopGutter}
      {LeftGutter}
      <Wrapper>{children}</Wrapper>
      {RightGutter}
      {BottomGutter}
    </StyledResizable>
  );
};

const StyledResizable = styled.div<Pick<Props, "direction" | "size">>`
  display: flex;
  align-items: stretch;
  flex-direction: ${({ direction }) => (direction === "vertical" ? "row" : "column")};
  width: ${({ direction, size }) => (direction === "horizontal" ? null : `${size}px`)};
  height: ${({ direction, size }) => (direction === "vertical" ? null : `${size}px`)};
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  width: calc(100% - 4px);
  height: 100%;
  background: ${({ theme }) => theme.general.bg.veryStrong};
`;

const Gutter = styled.div`
  user-select: none;
  background: ${({ theme }) => theme.general.bg.veryStrong};
`;

const HorizontalGutter = styled(Gutter)`
  height: 4px;
  cursor: row-resize;
`;

const VerticalGutter = styled(Gutter)`
  width: 4px;
  cursor: col-resize;
`;

export default Resizable;
