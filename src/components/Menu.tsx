import Image from 'next/image';
import { GALLERIES } from '../constants/strings';
import { socialLinks } from '../constants/objectArrays';
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
        {socialLinks.map(({ href, alt, src }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <Image alt={alt} className="menu-social-icon" height={25} src={src} width={25} />
          </a>
        ))}
      </div>

    </div>
  );
};

export default Menu;
