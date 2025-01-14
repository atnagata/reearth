import { FEATURE_FLAGS } from "./featureFlags";

export type InteractionModeType = "default" | "move" | "selection" | "sketch";

// If you would like enable a feature in a specific mode,
// just set the feature's flag here to that mode.
export const INTERACTION_MODES: Record<InteractionModeType, number> = {
  default: FEATURE_FLAGS.CAMERA_MOVE | FEATURE_FLAGS.CAMERA_ZOOM | FEATURE_FLAGS.SINGLE_SELECTION,
  move: FEATURE_FLAGS.CAMERA_MOVE | FEATURE_FLAGS.CAMERA_ZOOM,
  selection: FEATURE_FLAGS.MULTIPLE_SELECTION | FEATURE_FLAGS.CAMERA_ZOOM,
  sketch: FEATURE_FLAGS.SKETCH | FEATURE_FLAGS.CAMERA_ZOOM,
};
