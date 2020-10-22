import { Project } from '../interfaces/project.interface';
import { Projects } from '../enums/projects';

export const projects: Array<Project> = [
  {
    id: Projects.catsSystem,
    name: 'Cats System',
    description: 'A store with cats toys',
  },
  {
    id: Projects.dogStore,
    name: 'Dog Store',
    description: 'Everything for your dogs',
  },
];
