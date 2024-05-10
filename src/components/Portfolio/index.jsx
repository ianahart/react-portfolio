import { projectsData } from '../../data/projects';
import Project from './Project';

const Portfolio = () => {
  return (
    <section className="md:max-w-[800px] max-w-full mx-auto">
      <div className="my-2">
        <h3 className="font-display text-2xl text-green-400 text-center">My Projects</h3>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        {projectsData.map((project) => {
          return <Project key={project.id} data={project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
