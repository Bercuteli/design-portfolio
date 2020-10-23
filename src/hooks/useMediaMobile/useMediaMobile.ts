import { useMedia } from '../useMedia';
import { MediaQueries } from '../../enums/mediaQueries';

const useMediaMobile = () => {
  const isPortrait = useMedia(MediaQueries.mobilePortrait);
  const isLandscape = useMedia(MediaQueries.mobileLandscape);

  return (isPortrait || isLandscape);
};

export default useMediaMobile;
export { useMediaMobile };
