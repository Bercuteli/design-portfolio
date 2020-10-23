import { Project } from '../interfaces/project.interface';
import { Projects } from '../enums/projects';

// cats-system
import CatsSystemSketch from './catsSystem/sketch.jpg';
import CatsSystemDesign from './catsSystem/design.jpg';
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
    sketch: CatsSystemSketch,
    design: CatsSystemDesign,
    html: CatsSystemHTML,
  },
  {
    id: Projects.dogStore,
    name: 'Dog Store',
    description: 'Everything for your dogs',
    sketch: EmptyTemplate,
    design: DogStoreDesign,
    html: DogStoreHTML,
  },
  {
    id: Projects.airport,
    name: 'Airport',
    description: 'Buy ticket easily',
    sketch: '',
    design: '',
    html: DogStoreHTML,
  },
  {
    id: Projects.starShip,
    name: 'Star Ship',
    description: 'Go to the Moon',
    sketch: '',
    design: '',
    html: DogStoreHTML,
  },
];
