import { useState, useEffect } from "react";
import { windowSize } from "../../types";

function getDeviceType() {
  const screenWidth = window.innerWidth;
  switch (true) {
    case screenWidth > 1280:
      return "desktopL";
      break;
    case 1280 >= screenWidth && screenWidth > 700:
      return "desktopM";
      break;
    case screenWidth >= 700:
      return "mobile";
      break;
    default:
      return "mobile";
      break;
  }
}

export const useDeviceType = () => {
  const [windowDimensions, setWindowDimensions] = useState<windowSize>({
    width: undefined,
    height: undefined,
  });
  const [deviceType, setDeviceType] = useState<string>("mobile");
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setDeviceType(getDeviceType());
    }
    window.addEventListener("resize", handleResize); //N1
    handleResize(); //N2
    return () => window.removeEventListener("resize", handleResize); //N3
  }, []); //N4

  useEffect(() => {
    deviceType === "mobile" && setIsMobile(true);
    deviceType !== "mobile" && setIsMobile(false);
  }, [deviceType]);

  return { windowDimensions, deviceType, isMobile, isDesktop: !isMobile };
};

export default useDeviceType;

/*
  Notes:
  N1 Add event listener
  N2 Call handler right away so state gets updated with initial window size
  N3 Remove event listener on cleanup
  N4 Empty array ensures that effect is only run on mount
*/
