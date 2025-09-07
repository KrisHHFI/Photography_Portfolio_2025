import Image from 'next/image';
import { GALLERIES } from '../constants/strings';
import { socialLinks } from '../constants/objectArrays';
import { useGlobalContext } from '../context/GlobalContext';

const Menu: React.FC = () => {
  const { activeLink, setActiveLink, menuVisible, toggleMenu } = useGlobalContext();

  const handleLinkChange = (link: string) => {
    setActiveLink(link);
    toggleMenu();
  };

  const getLinkClass = (link: string) => {
    return `menu-link ${activeLink === link ? 'menu-active-link' : ''}`;
  };

  return (
    <div className={`menu ${menuVisible ? 'menu-visible' : ''}`}>
      <div className="menu-links">
        {Object.values(GALLERIES).map((gallery) => (
          <div
            key={gallery}
            className={getLinkClass(gallery)}
            onClick={() => handleLinkChange(gallery)}
          >
            {gallery}
          </div>
        ))}

        {/* Sign in as another link */}
        <div
          className={getLinkClass('Sign in')}
          onClick={() => handleLinkChange(activeLink)}
        >
          Sign in
        </div>
      </div>

      <div className="menu-social-icons">
        {socialLinks.map(({ href, alt, src }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <Image
              alt={alt}
              className="menu-social-icon"
              height={25}
              src={src}
              width={25}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
