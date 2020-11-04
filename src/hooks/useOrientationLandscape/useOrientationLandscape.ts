import { useMedia } from '../useMedia';
import { MediaQueries } from '../../enums/mediaQueries';

const useOrientationLandscape = () => {
  const isDesktop = useMedia(MediaQueries.desktop);
  const isLaptop = useMedia(MediaQueries.laptop);
  const isTabletLandscape = useMedia(MediaQueries.tabletLandscape);
  const isMobileLandscape = useMedia(MediaQueries.mobileLandscape);

  return (isDesktop || isLaptop || isTabletLandscape || isMobileLandscape);
};

export default useOrientationLandscape;
export { useOrientationLandscape };
