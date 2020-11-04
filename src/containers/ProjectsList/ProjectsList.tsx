import React from 'react';
import clsx from 'clsx';
import { useLocation, NavLink } from 'react-router-dom';

import NoImage from '../../images/no-image.png';

import { projects } from '../../projects/projects';
import { useOrientationPortrait } from '../../hooks/useOrientationPortrait';
import { useWrapperClass } from '../../hooks/useWrapperClass';

import { Wrapper } from './ProjectsList.style';

const ProjectsList = () => {
  const isPortrait = useOrientationPortrait()
  const wrapperClass = useWrapperClass();
  const { pathname } = useLocation();

  return (
    <Wrapper className={wrapperClass}>
      {!isPortrait && (
        <h3>Projects</h3>
      )}
      <div className="list">
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
      </div>
    </Wrapper>
  );
};

export default ProjectsList;
export { ProjectsList };
