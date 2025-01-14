import { ReactNode, useMemo } from "react";

import VisualizerNav from "@reearth/beta/features/Editor/VisualizerNav";
import { Tab } from "@reearth/beta/features/Navbar";

type Props = {
  tab: Tab;
};

export default ({ tab }: Props) => {
  const visualizerNav = useMemo<ReactNode | undefined>(() => {
    switch (tab) {
      case "widgets":
        return <VisualizerNav />;
      case "publish":
        return <VisualizerNav />;
      case "scene":
      case "story":
      default:
        return undefined;
    }
  }, [tab]);

  return {
    visualizerNav,
  };
};
