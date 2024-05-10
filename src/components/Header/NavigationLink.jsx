import { Link } from 'react-router-dom';

const NavigationLink = ({ link, changeLink }) => {
  const { id, path, title, active } = link;

  return (
    <div className="md:px-2 md:m-0 m-4" onClick={() => changeLink(id)}>
      <Link className={`${active ? 'text-green-400 font-bold' : 'text-inherit'}`} to={path}>
        {title}
      </Link>
    </div>
  );
};
export default NavigationLink;
