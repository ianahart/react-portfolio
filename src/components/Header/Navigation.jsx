import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import NavigationLink from './NavigationLink';

const linksState = [
  { id: 1, path: '/', title: 'About me', active: true },
  { id: 2, path: '/portfolio', title: 'Portfolio', active: false },
  { id: 3, path: '/contact', title: 'Contact', active: false },
  { id: 4, path: '/resume', title: 'Resume', active: false },
];

const Navigation = () => {
  const [links, setLinks] = useState(linksState);
  const [isMobile, setIsMobile] = useState(false);

  const changeLink = (id) => {
    const updatedLinks = links.map((link) => (link.id === id ? { ...link, active: true } : { ...link, active: false }));
    setLinks(updatedLinks);
    if (isMobile) {
      setIsMobile(false);
    }
  };

  return (
    <nav>
      {!isMobile && (
        <RxHamburgerMenu
          onClick={() => setIsMobile(true)}
          className="md:hidden text-2xl text-green-400 cursor-pointer"
        />
      )}
      {isMobile && (
        <AiOutlineClose
          onClick={() => setIsMobile(false)}
          className="md:hidden text-2xl text-green-400 cursor-pointer"
        />
      )}
      <ul
        className={`md:right-0 md:relative md:flex md:bg-inherit md:min-h-0 ${
          isMobile ? 'mobile-nav-visible' : 'hidden'
        }`}
      >
        {links.map((link) => {
          return <NavigationLink key={link.id} link={link} changeLink={changeLink} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
