import { useMedia } from '../useMedia';
import { MediaQueries } from '../../enums/mediaQueries';

const useMediaLaptop = () => {
  const isLaptop = useMedia(MediaQueries.laptop);
  return isLaptop;
};

export default useMediaLaptop;
export { useMediaLaptop };
