import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

import SocialIcon from './SocialIcon';

const SocialIcons = () => {
  return (
    <div className="flex justify-center">
      <SocialIcon icon={<FaGithub />} href="https://github.com/ianahart" />
      <SocialIcon icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/ian-h-314141127/" />
      <SocialIcon icon={<FaXTwitter />} href="https://twitter.com/ianhart720" />
    </div>
  );
};

export default SocialIcons;
