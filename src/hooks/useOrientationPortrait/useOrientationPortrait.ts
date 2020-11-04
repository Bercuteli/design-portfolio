import { useMedia } from '../useMedia';
import { MediaQueries } from '../../enums/mediaQueries';

const useOrientationPortrait = () => {
  const isTabletPortrait = useMedia(MediaQueries.tabletPortrait);
  const isMobilePortrait = useMedia(MediaQueries.mobilePortrait);

  return (isTabletPortrait || isMobilePortrait);
};

export default useOrientationPortrait;
export { useOrientationPortrait };
