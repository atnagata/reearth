import { FC } from "react";

import { styled } from "@reearth/services/theme";

import Icon from "../../Icon";
import Text from "../../Text";

import useHooks from "./hooks";

function formatTime(seconds: number) {
  return [Math.floor(seconds / 60).toString(), ("00" + Math.floor(seconds % 60)).slice(-2)].join(
    ":",
  );
}

type Props = {
  loop?: boolean;
  src?: string;
};

const scrollBar = {
  text: {
    main: "#2E2E2E",
    weakest: "#C7C5C5",
    weak: "#8C8A8A",
  },
};

const AudioBlock: FC<Props> = ({ loop, src }) => {
  const {
    onLoadedData,
    onTimeUpdate,
    onPlayPause,
    onVolumeDown,
    onVolumeUp,
    onSliderChange,
    onSliderMouseDown,
    onSlidreMouseUp,
    audioRef,
    isPlaying,
    currentTime,
    duration,
  } = useHooks();

  return (
    <Frame>
      <audio
        ref={audioRef}
        loop={loop}
        onLoadedData={onLoadedData}
        onTimeUpdate={onTimeUpdate}
        preload="metadata">
        <source src={src} />
      </audio>
      <ControlPanel>
        <Header>
          <MusicNotes>
            <Icon icon="musicNotes" size={16} />
          </MusicNotes>
        </Header>
        <ControlFrame>
          <Controls>
            <ControlButtons>
              <PauseButton onClick={onPlayPause}>
                <Icon
                  icon={isPlaying ? "pause" : "playRightFill"}
                  size={10}
                  color={scrollBar.text.main}
                />
              </PauseButton>
              <Volumes>
                <VolumeButton onClick={onVolumeDown}>
                  <Icon icon="volumeDown" color={scrollBar.text.main} />
                </VolumeButton>
                <VolumeButton onClick={onVolumeUp}>
                  <Icon icon="volumeUp" color={scrollBar.text.main} />
                </VolumeButton>
              </Volumes>
            </ControlButtons>
            <Counter>
              <Time duration={duration}>
                <Text size={"footnote"} color={scrollBar.text.main}>
                  {formatTime(currentTime)}
                </Text>
              </Time>
              <Text size={"footnote"} color={scrollBar.text.main}>
                {"/"}
              </Text>
              <Time duration={duration}>
                <Text size={"footnote"} color={scrollBar.text.main}>
                  {formatTime(duration)}
                </Text>
              </Time>
            </Counter>
          </Controls>
          <SliderBar
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            parcentage={(currentTime * 100) / duration}
            step={0.1}
            onChange={onSliderChange}
            onMouseDown={onSliderMouseDown}
            onMouseUp={onSlidreMouseUp}
            onTouchStart={onSliderMouseDown}
            onTouchEnd={onSlidreMouseUp}
          />
        </ControlFrame>
      </ControlPanel>
    </Frame>
  );
};

const Frame = styled.div`
  border: 0.5px solid ${props => props.theme.general.select};
`;

const ControlPanel = styled.div`
  box-sizing: border-box;

  display: flex;

  border: 1px solid ${props => props.theme.general.content.main};
  border-radius: 6px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  background: ${scrollBar.text.weakest};
`;

const MusicNotes = styled.div`
  width: 16px;
  height: 16px;
  line-height: 0;
`;

const ControlFrame = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 12px;

  height: 30px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PauseButton = styled.button`
  width: 18px;
  height: 18px;
`;

const Volumes = styled.div`
  display: flex;
  gap: 2px;
`;

const VolumeButton = styled.button`
  display: flex;
  padding: 3px;

  width: 18px;
  height: 18px;
`;

const Counter = styled.div`
  display: flex;
  gap: 4px;
`;

const Time = styled.div<{ duration: number }>`
  width: ${props => (props.duration >= 10 * 60 ? 35.305 : 27.234)}px;
  text-align: right;
`;

const SliderBar = styled.input<{ parcentage: number }>`
  width: 100%;
  height: 0px;
  cursor: pointer;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: linear-gradient(
      to right,
      ${props => scrollBar.text.weak + " " + props.parcentage + "%"},
      ${props => scrollBar.text.weakest + " " + props.parcentage + "%"}
    );
    border-radius: 100px;
  }
  &::-moz-range-track {
    width: 100%;
    height: 4px;
    background: linear-gradient(
      to right,
      ${props => scrollBar.text.weak + " " + props.parcentage + "%"},
      ${props => scrollBar.text.weakest + " " + props.parcentage + "%"}
    );
    border-radius: 100px;
  }
  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 14px;
    width: 14px;
    background: ${scrollBar.text.main};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: 150ms;
  }
  &::-moz-range-thumb {
    height: 14px;
    width: 14px;
    background: ${scrollBar.text.main};
    border-radius: 100%;
    border: 0;
    transition: 150ms;
  }
`;

export default AudioBlock;
