import { useGlobalContext } from '../context/GlobalContext';
import { icons } from '../constants/ImageManager';

const MenuIcon: React.FC = () => {
  const { toggleMenu } = useGlobalContext();

  return (
    <div className='menu-icon-container' onClick={toggleMenu}>
      <img src={icons.menuIcon} alt="Menu Icon" className="menu-icon" />
    </div>
  );
};

export default MenuIcon;
