import { Link } from 'react-router-dom';

const NavigationLink = ({ link, changeLink }) => {
  const { path, title, active } = link;

  return (
    <li className="md:px-2 md:m-0 m-4" onClick={() => changeLink(path)}>
      <Link className={`${active ? 'text-green-400 font-bold' : 'text-inherit'}`} to={path}>
        {title}
      </Link>
    </li>
  );
};
export default NavigationLink;
