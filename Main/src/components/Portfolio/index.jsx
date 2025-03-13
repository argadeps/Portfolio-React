import { useState } from 'react';
import Project from "../Project";


function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Project 1',
      description: 'React JS',
      link: "https://github.com",
      repo: "https://github.com",
      imageName: 'laptop'
      
    },
    {
      name: 'Project 2',
      description: 'Postgres',
      link: "https://github.com",
      repo: "https://github.com",
      imageName: 'pastelPuzzels'
    },
    {
      name: 'Project 3',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com",
      imageName: 'code'
    },
    {
      name: 'Project 4',
      description: 'Automated Testing',
      link: "https://github.com",
      repo: "https://github.com",
      imageName: 'ledWall'
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
