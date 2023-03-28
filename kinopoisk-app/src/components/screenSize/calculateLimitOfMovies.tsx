import { useResizeResult } from "./useResize";

export const calculateLimitOfMovies = (screenSize: useResizeResult): number => {
  if (screenSize.isScreen380) {
    return 10;
  } else if (screenSize.isScreen680) {
    return 10;
  } else if (screenSize.isScreen720) {
    return 9;
  } else if (screenSize.isScreen850) {
    return 9;
  } else if (screenSize.isScreen1000) {
    return 8;
  } else if (screenSize.isScreen1150) {
    return 8;
  } else if (screenSize.isScreen1400) {
    return 10;
  } else if (screenSize.isScreen1600) {
    return 12;
  } else if (screenSize.isScreen2000) {
    return 12;
  } else if (screenSize.isScreen2400) {
    return 15;
  } else if (screenSize.isScreen2800) {
    return 18;
  } else if (screenSize.isScreen3150) {
    return 21;
  } else if (screenSize.isScreen3400) {
    return 24;
  } else {
    return 27;
  }
};
