import { Project } from '../interfaces/project.interface';
import { Projects } from '../enums/projects';

// cats-system
import CatsSystemSketch from './catsSystem/sketch.jpg';
import CatsSystemDesign from './catsSystem/design.jpg';
import CatsSystemHTML from './catsSystem/html';

// dog-store
import DogStoreSketch from './dogStore/sketch.jpeg';
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
    sketch: DogStoreSketch,
    design: DogStoreDesign,
    html: DogStoreHTML,
  },
];
