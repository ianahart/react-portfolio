import headerImg from '../../assets/header.svg';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="sticky top-[100vh]">
      <div>
        <img src={headerImg} alt="waves" />
      </div>
      <div className="my-4 flex justify-center">
        <SocialIcons />
      </div>
      <p className="font-body text-center pb-2">Ian Hart &copy;{year}</p>
    </footer>
  );
};

export default Footer;
