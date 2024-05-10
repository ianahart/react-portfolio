import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-2 header">
        <h1 className="font-display tracking-wider text-green-400 text-3xl">Ian Hart</h1>
        <Navigation />
      </div>
      <div className="header-content"></div>
    </header>
  );
};

export default Header;
