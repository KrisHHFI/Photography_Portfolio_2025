import { useGlobalContext } from '../context/GlobalContext';
import { icons } from '../constants/ImageManager';
import Image from 'next/image';

const MenuIcon: React.FC = () => {
  const { toggleMenu } = useGlobalContext();

  return (
    <div className='menu-icon-container' onClick={toggleMenu}>
      <Image
        alt="Menu Icon"
        className="menu-icon"
        height={40}
        src={icons.menuIcon}
        width={40}
      />
    </div>
  );
};

export default MenuIcon;
