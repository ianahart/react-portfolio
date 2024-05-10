import { frontendSkills, backendSkills } from '../../data/projects';
import Skills from './Skills';

const Resume = () => {
  return (
    <section className="md:max-w-[800px] max-w-full mx-auto p-2">
      <div className="my-2">
        <h3 className="font-display text-2xl text-green-400 text-center">Resume</h3>
        <div className="flex justify-center my-2">
          <p className="mr-2">Download my</p>
          <a
            className="font-bold text-green-400"
            href="https://drive.google.com/file/d/11DQy1ant4bJvaGPXO2t1K60iI8jCE0XN/view?usp=drive_link"
            download
          >
            Resume
          </a>
        </div>
      </div>
      <div className="my-6">
        <Skills title="Frontend" data={frontendSkills} />
        <Skills title="Backend" data={backendSkills} />
      </div>
    </section>
  );
};

export default Resume;
