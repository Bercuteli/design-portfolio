import { Project } from '../interfaces/project.interface';
import { Projects } from '../enums/projects';
import { ImageSizes } from '../enums/imageSizes';

// cats-system
import CatsSystemPreviewMini from './catsSystem/preview-mini.jpg';
import CatsSystemSketchOrigin from './catsSystem/sketch-origin.jpg';
import CatsSystemSketchMiddle from './catsSystem/sketch-middle.jpg';
import CatsSystemSketchSmall from './catsSystem/sketch-small.jpg';
import CatsSystemDesignOrigin from './catsSystem/design-origin.jpg';
import CatsSystemDesignMiddle from './catsSystem/design-middle.jpg';
import CatsSystemDesignSmall from './catsSystem/design-small.jpg';
import CatsSystemHTML from './catsSystem/html';

// dog-store
import EmptyTemplate from '../images/empty-template-1440-900.png';
import DogStoreDesign from './dogStore/design.jpg';
import DogStoreHTML from './dogStore/html';

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
  {
    id: Projects.dogStore,
    name: 'Dog Store',
    description: 'Everything for your dogs',
    sketch: {
      [ImageSizes.origin]: EmptyTemplate,
      [ImageSizes.middle]: EmptyTemplate,
      [ImageSizes.small]: EmptyTemplate,
    },
    design: {
      [ImageSizes.origin]: DogStoreDesign,
      [ImageSizes.middle]: DogStoreDesign,
      [ImageSizes.small]: DogStoreDesign,
    },
    html: DogStoreHTML,
  },
];
