// == Import : npm
import React from 'react';

// == Import : local
import './projects.scss';
import myProjects from 'src/data/projects';
import OneProject from './OneProject';

// == Composant
const Projects = () => {

  const { projects } = myProjects;
  return (
    <React.Fragment>
      <section className="projects">
        <h2 className="projects-title">Voir mes projets</h2>
        <div className="projects-box">
          {projects.map((project) => {
            return (
              <OneProject key={project.key} {...project} />
            );
          })}
        </div>
      </section>
      <div className="separateSection" />
    </React.Fragment>
  );
};


// == Export
export default Projects;
