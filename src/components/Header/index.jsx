import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <h1 className="font-display tracking-wider text-green-400 text-3xl">Ian Hart</h1>
      <Navigation />
    </div>
  );
};

export default Header;
