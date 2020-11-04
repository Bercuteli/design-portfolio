import { Project } from '../interfaces/project.interface';
import { Projects } from '../enums/projects';
import { ImageSizes } from '../enums/imageSizes';

// cats-system
import CatsSystemPreviewMini from './catsSystem/preview-mini.png';
import CatsSystemSketchOrigin from './catsSystem/sketch-origin.png';
import CatsSystemSketchMiddle from './catsSystem/sketch-middle.png';
import CatsSystemSketchSmall from './catsSystem/sketch-small.png';
import CatsSystemDesignOrigin from './catsSystem/design-origin.png';
import CatsSystemDesignMiddle from './catsSystem/design-middle.png';
import CatsSystemDesignSmall from './catsSystem/design-small.png';
import CatsSystemHTML from './catsSystem/html';

export const projects: Array<Project> = [
  {
    id: Projects.catsSystem,
    name: 'Cats System',
    description: 'A store with cats toys',
    preview: CatsSystemPreviewMini,
    sketch: {
      [ImageSizes.origin]: CatsSystemSketchOrigin,
      [ImageSizes.middle]: CatsSystemSketchMiddle,
      [ImageSizes.small]: CatsSystemSketchSmall,
    },
    design: {
      [ImageSizes.origin]: CatsSystemDesignOrigin,
      [ImageSizes.middle]: CatsSystemDesignMiddle,
      [ImageSizes.small]: CatsSystemDesignSmall,
    },
    html: CatsSystemHTML,
  },
];
