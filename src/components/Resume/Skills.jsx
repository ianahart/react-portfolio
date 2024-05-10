const Skills = ({ data, title }) => {
  return (
    <div className="my-4 flex-col flex items-center">
      <h3 className="text-xl text-green-400 font-display">{title}</h3>
      <ul className="flex-col flex items-center">
        {data.map(({ id, name }) => {
          return (
            <li className="my-2" key={id}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
