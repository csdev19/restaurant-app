import {
  UseWindowSizeResponse,
  WindowSize,
} from 'shared/interfaces/utils.interfaces';
import { useEffect, useState } from 'react';

export interface WidthSizesProps<T> {
  extrasmall: T;
  small: T;
  medium: T;
  large: T;
  extralarge: T;
}

const useWindowSize = (): UseWindowSizeResponse => {
  const widthSizes: WidthSizesProps<number> = {
    extrasmall: 200,
    small: 400,
    medium: 800,
    large: 1000,
    extralarge: 1400,
  };

  const getKeyByValue = (object, value) =>
    Object.keys(object).find((key) => object[key] === value);

  const getStateByWith = (width) => {
    let value;
    if (width <= widthSizes.extrasmall) {
      value = getKeyByValue(widthSizes, widthSizes.extrasmall);
    } else if (width <= widthSizes.small) {
      value = getKeyByValue(widthSizes, widthSizes.small);
    } else if (width <= widthSizes.medium) {
      value = getKeyByValue(widthSizes, widthSizes.medium);
    } else if (width <= widthSizes.large) {
      value = getKeyByValue(widthSizes, widthSizes.large);
    } else if (width <= widthSizes.extralarge) {
      value = getKeyByValue(widthSizes, widthSizes.extralarge);
    } else {
      value = getKeyByValue(widthSizes, widthSizes.extralarge);
    }
    return value;
  };

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });
  const [widthState, setWidthState] = useState(
    getStateByWith(windowSize.width),
  );

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setWidthState(getStateByWith(window.innerWidth));
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return [windowSize, widthState];
};

export default useWindowSize;
