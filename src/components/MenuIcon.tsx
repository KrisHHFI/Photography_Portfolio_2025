import { useGlobalContext } from '../context/GlobalContext';

const MenuIcon: React.FC = () => {
  const { toggleMenu } = useGlobalContext();

  return (
    <div className='menu-icon-container' onClick={toggleMenu}>
      <img src='/MenuIcon.png' alt="Menu Icon" className="menu-icon" />
    </div>
  );
};

export default MenuIcon;
