import educationMangementImg from '../assets/kbi.png';
import filmScoutImg from '../assets/film_scout.png';
import passwordGeneratorImg from '../assets/password-generator.png';
import horiseonImg from '../assets/horiseon.png';
import workDaySchedulerImg from '../assets/scheduler.png';
import seessImg from '../assets/seess.png';

export const projectsData = [
  {
    id: 1,
    name: 'Education Management',
    tools: 'Express/mySQL',
    github_url: 'https://github.com/ianahart/Education-Management-Application',
    deployed_url: 'https://education-management-hart-7c088cb1e75a.herokuapp.com/',
    image_src: educationMangementImg,
  },
  {
    id: 2,
    name: 'Film Scout',
    tools: 'HTML/CSS/JavaScript',
    github_url: 'https://github.com/ianahart/movie-data',
    deployed_url: 'https://afry72.github.io/movie-data/',
    image_src: filmScoutImg,
  },
  {
    id: 3,
    name: 'Password Generator',
    tools: 'JavaScript',
    github_url: 'https://github.com/ianahart/unique-password-generator',
    deployed_url: 'https://ianahart.github.io/unique-password-generator/',
    image_src: passwordGeneratorImg,
  },
  {
    id: 4,
    name: 'Horiseon',
    tools: 'HTML/CSS',
    github_url: 'https://github.com/ianahart/bc-horiseon',
    deployed_url: 'https://ianahart.github.io/bc-horiseon/',
    image_src: horiseonImg,
  },
  {
    id: 5,
    name: 'Scheduler',
    tools: 'HTML/CSS/jQuery',
    github_url: 'https://github.com/ianahart/work-day-scheduler',
    deployed_url: 'https://ianahart.github.io/work-day-scheduler/',
    image_src: workDaySchedulerImg,
  },
  {
    id: 6,
    name: 'SeeSS',
    tools: 'MERN/Graphql',
    github_url: 'https://github.com/ianahart/SeeSS',
    deployed_url: 'https://seess-3sv5.onrender.com/',
    image_src: seessImg,
  },
];

export const frontendSkills = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'jQuery' },
  { id: 5, name: 'Responsive designs' },
  { id: 6, name: 'React' },
  { id: 7, name: 'Bootstrap' },
];

export const backendSkills = [
  { id: 1, name: 'APIs' },
  { id: 2, name: 'Node' },
  { id: 3, name: 'Express' },
  { id: 4, name: 'mySQL, Sequelize' },
  { id: 5, name: 'noSQL, MongoDB, Mongoose' },
];
