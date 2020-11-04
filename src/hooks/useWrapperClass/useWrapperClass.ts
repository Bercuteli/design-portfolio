import clsx from 'clsx';
import { useOrientationPortrait } from '../useOrientationPortrait';

const useWrapperClass = (basicClassName = ''): string => {
  const isPortrait = useOrientationPortrait();

  return clsx(basicClassName, {
    portrait: isPortrait,
  });
};

export default useWrapperClass;
export { useWrapperClass };
