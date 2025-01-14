import commonColors from "../common/colors";

const colors = {
  bg: {
    transparent: commonColors.general.transparentBlack,
    1: "#070707",
    2: "#171618",
    3: "#232226",
    4: "#2B2A2F",
    5: "#3F3D45",
  },
  text: {
    strong: "#FFFFFF",
    main: "#C7C5C5",
    weak: "#4A4A4A",
  },
  outline: {
    strong: "#D7D7D7",
    main: "#A0A0A0",
    weak: "#4A4A4A",
    weakest: "#383838",
  },
  primary: {
    strong: "#2AADE9",
    main: "#00A0E8",
    weak: "#008AC8",
    weakest: "#004260",
  },
  secondary: {
    main: "#888686",
    weak: "#4C4C4C",
    weakest: "#3B383F",
  },
  danger: {
    main: "#FF3C53",
    weak: "#B02838",
    weakest: "#841C28",
  },
  functional: {
    link: "#3592FF",
    notice: "#6E9CD2",
    select: commonColors.brand.blue.strong, // Might not need
    success: "#07B28C",
    attention: "#CFBF01",
    override: "#D6C71C",
    error: "#FF3C53",
  },
};

export default colors;

export type Colors = typeof colors;
