import { useMedia } from '../useMedia';
import { MediaQueries } from '../../enums/mediaQueries';

const useMediaTablet = () => {
  const isPortrait = useMedia(MediaQueries.tabletPortrait);
  const isLandscape = useMedia(MediaQueries.tabletLandscape);

  return (isPortrait || isLandscape);
};

export default useMediaTablet;
export { useMediaTablet };
