import { useMedia } from '../useMedia';
import { MediaQueries } from '../../enums/mediaQueries';

const useMediaDesktop = () => {
  const isDesktop = useMedia(MediaQueries.desktop);
  return isDesktop;
};

export default useMediaDesktop;
export { useMediaDesktop };
