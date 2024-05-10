const SocialIcon = ({ icon, href }) => {
  return (
    <a className=" mx-4 text-green-400 text-2xl" href={href}>
      {icon}
    </a>
  );
};

export default SocialIcon;
