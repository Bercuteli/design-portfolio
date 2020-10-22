import React from 'react';
import clsx from 'clsx';
import { useParams, NavLink } from 'react-router-dom';

import { projects } from '../../assets/projects';
import { Wrapper } from './ProjectsList.style';

const ProjectsList = () => {
  const { projectName } = useParams();

  return (
    <Wrapper>
      <h3>Projects</h3>
      {projects.map(project => {
        const { id, name, description } = project;
        const className = clsx('item', {
          active: id === projectName,
        });

        return (
          <NavLink to={`/project/${id}`} key={id}>
            <div className={className}>
              <div className="name">{name}</div>
              <div className="description">{description}</div>
            </div>
          </NavLink>
        )
      })}
    </Wrapper>
  );
};

export default ProjectsList;
export { ProjectsList };
