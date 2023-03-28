import { useState } from "react";
import { useEffect } from "react";

export const SCREEN_3400 = 3400;
export const SCREEN_3150 = 3150;
export const SCREEN_2800 = 2800;
export const SCREEN_2400 = 2400;
export const SCREEN_2000 = 2000;
export const SCREEN_1600 = 1600;
export const SCREEN_1400 = 1400;
export const SCREEN_1150 = 1150;
export const SCREEN_1000 = 1000;
export const SCREEN_850 = 850;
export const SCREEN_720 = 720;
export const SCREEN_680 = 680;
export const SCREEN_380 = 380;

export interface useResizeResult {
  width: number;
  isScreen3400: boolean;
  isScreen3150: boolean;
  isScreen2800: boolean;
  isScreen2400: boolean;
  isScreen2000: boolean;
  isScreen1600: boolean;
  isScreen1400: boolean;
  isScreen1150: boolean;
  isScreen1000: boolean;
  isScreen850: boolean;
  isScreen720: boolean;
  isScreen680: boolean;
  isScreen380: boolean;
}

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreen3400: width <= SCREEN_3400,
    isScreen3150: width <= SCREEN_3150,
    isScreen2800: width <= SCREEN_2800,
    isScreen2400: width <= SCREEN_2400,
    isScreen2000: width <= SCREEN_2000,
    isScreen1600: width <= SCREEN_1600,
    isScreen1400: width <= SCREEN_1400,
    isScreen1150: width <= SCREEN_1150,
    isScreen1000: width <= SCREEN_1000,
    isScreen850: width <= SCREEN_850,
    isScreen720: width <= SCREEN_720,
    isScreen680: width <= SCREEN_680,
    isScreen380: width <= SCREEN_380,
  };
};
