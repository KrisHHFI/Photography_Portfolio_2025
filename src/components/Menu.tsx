import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { icons } from '../constants/ImageManager';

const Menu: React.FC = () => {
  const { setActiveGallery, toggleMenu } = useGlobalContext();

  const handleGalleryChange = (gallery: string) => {
    setActiveGallery(gallery);
    toggleMenu();
  };

  return (
    <div className='menu'>
      <div className='menu-links'>
        <div className='menu-link' onClick={() => handleGalleryChange('BW Head Shots')}>
          BW Head Shots
        </div>
        <div className='menu-link' onClick={() => handleGalleryChange('Colour Head Shots')}>
          Colour Head Shots
        </div>
        <div className='menu-link' onClick={() => handleGalleryChange('Bands')}>
          Bands
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
