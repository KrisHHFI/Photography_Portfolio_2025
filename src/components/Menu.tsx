import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { icons } from '../constants/ImageManager';
import { GALLERIES } from '../constants/strings';

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
          <img
            src={icons.cameraIcon}
            alt="Camera Icon"
            className="menu-social-icon"
          />
        </a>
        <a
          href="https://github.com/KrisHHFI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icons.githubIcon}
            alt="GitHub Icon"
            className="menu-social-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kristopher-pepper-824184136/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icons.linkedInIcon}
            alt="LinkedIn Icon"
            className="menu-social-icon"
          />
        </a>
      </div>

    </div>
  );
};

export default Menu;
