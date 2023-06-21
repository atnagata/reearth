import { useCallback, useRef, useState, ChangeEvent } from "react";

export default () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const onLoadedData = useCallback(() => {
    setDuration(audioRef.current?.duration ?? 0);
  }, [audioRef, setDuration]);
  const onTimeUpdate = useCallback(() => {
    setCurrentTime(audioRef.current?.currentTime ?? 0);
  }, [audioRef, setCurrentTime]);
  const onPlayPause = useCallback(() => {
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlaying(!isPlaying);
  }, [audioRef, isPlaying, setIsPlaying]);
  const onVolumeDown = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume -= 0.1;
    }
  }, [audioRef]);
  const onVolumeUp = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume += 0.1;
    }
  }, [audioRef]);
  const onSliderChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (audioRef.current) {
        audioRef.current.currentTime = e.currentTarget.valueAsNumber;
      }
    },
    [audioRef],
  );
  const onSliderMouseDown = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current?.pause();
    }
  }, [audioRef, isPlaying]);
  const onSlidreMouseUp = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current?.play();
    }
  }, [audioRef, isPlaying]);

  return {
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
  };
};
