import React from 'react';
import clsx from 'clsx';
import { useLocation, NavLink } from 'react-router-dom';

import NoImage from '../../images/no-image.png';

import { projects } from '../../projects/projects';
import { Wrapper } from './ProjectsList.style';

const ProjectsList = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <h3>Projects</h3>
      {projects.map(project => {
        const { id, name, description, preview } = project;
        const className = clsx('item', {
          active: pathname.includes(id),
        });

        const image = preview || NoImage;

        return (
          <NavLink to={`/project/${id}`} key={id}>
            <div className={className}>
              <img src={image} alt="name" />
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
