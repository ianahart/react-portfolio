import { useState } from 'react';
import { FaGithub, FaHome } from 'react-icons/fa';

const Project = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, tools, github_url, deployed_url, image_src } = data;

  const handleMouseOver = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="justify-self-center my-8 mx-4">
      <h3 className="rounded p-1 my-1 bg-slate-900 text-green-400 text-center font-bold">{name}</h3>
      <div
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className="relative brightness-50 hover:brightness-100 active:brightness-100"
      >
        <img className="rounded h-[300px]" src={image_src} alt={name} />
        {isHovered && (
          <div className="absolute h-full w-full  top-0 z-10 text-white font-bold bg-slate-900 opacity-70 p-2 rounded">
            <div className="flex items-center my-2">
              <FaHome className="mr-1" />
              <a href={deployed_url}>Live application</a>
            </div>
            <div className="flex items-center my-2">
              <FaGithub className="mr-1" />
              <a href={github_url}>GitHub Repository</a>
            </div>
          </div>
        )}
      </div>
      <h3 className="rounded p-1 bg-slate-900 text-green-400 text-center font-bold">{tools}</h3>
    </div>
  );
};

export default Project;
