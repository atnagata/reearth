import { styled } from "@reearth/services/theme";

type Props = {};

const NavigationHeader: React.FC<Props> = () => {
  return (
    <Wrapper>
      <div style={{ padding: "16px 0px 0px 8px" }}>
        <button style={{ background: "blue", width: "100px", height: "100%" }}>item 1</button>
      </div>
      <div style={{ padding: "8px 0px 8px 0px" }}>
        <button style={{ background: "blue", width: "100px", height: "100%" }}>item 2</button>
      </div>
      <div style={{ padding: "12px 15px 12px 0px" }}>
        <button style={{ background: "blue", width: "100px", height: "100%" }}>item 3</button>
      </div>
    </Wrapper>
  );
};

export default NavigationHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  background: ${({ theme }) => theme.general.bg.veryStrong};
`;
