import Image from 'next/image';
import { GALLERIES } from '../constants/strings';
import { icons } from '../constants/ImageManager';
import { useGlobalContext } from '../context/GlobalContext';

const Menu: React.FC = () => {
  const { activeGallery, setActiveGallery, toggleMenu } = useGlobalContext();

  const handleGalleryChange = (gallery: string) => {
    setActiveGallery(gallery);
    toggleMenu();
  };

  const getLinkClass = (gallery: string) => {
    return `menu-link ${activeGallery === gallery ? 'menu-active-link' : ''}`;
  };

  return (
    <div className='menu'>
      <div className='menu-links'>
        <div
          className={getLinkClass(GALLERIES.BW_HEAD_SHOTS)}
          onClick={() => handleGalleryChange(GALLERIES.BW_HEAD_SHOTS)}
        >
          {GALLERIES.BW_HEAD_SHOTS}
        </div>
        <div
          className={getLinkClass(GALLERIES.COLOUR_HEAD_SHOTS)}
          onClick={() => handleGalleryChange(GALLERIES.COLOUR_HEAD_SHOTS)}
        >
          {GALLERIES.COLOUR_HEAD_SHOTS}
        </div>
        <div
          className={getLinkClass(GALLERIES.BANDS)}
          onClick={() => handleGalleryChange(GALLERIES.BANDS)}
        >
          {GALLERIES.BANDS}
        </div>
      </div>

      <div className='menu-social-icons'>
        <a
          href="https://www.shutterstock.com/g/Kristopher+Pepper?rid=263519982"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Camera Icon"
            className="menu-social-icon"
            height={25}
            src={icons.cameraIcon}
            width={25}
          />
        </a>
        <a
          href="https://github.com/KrisHHFI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="GitHub Icon"
            className="menu-social-icon"
            height={25}
            src={icons.githubIcon}
            width={25}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kristopher-pepper-824184136/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="LinkedIn Icon"
            className="menu-social-icon"
            height={25}
            src={icons.linkedInIcon}
            width={25}
          />
        </a>
      </div>

    </div>
  );
};

export default Menu;
