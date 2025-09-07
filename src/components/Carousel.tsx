import Image from 'next/image';
import { bandImages, bwImages, colourImages, gifImages, icons } from '../constants/ImageManager';
import { GALLERIES } from '../constants/strings';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Carousel: React.FC = () => {
  const { activeLink } = useGlobalContext();

  const getCurrentGalleryImages = () => {
    switch (activeLink) {
      case GALLERIES.BW_HEAD_SHOTS:
        return bwImages;
      case GALLERIES.COLOUR_HEAD_SHOTS:
        return colourImages;
      case GALLERIES.BANDS:
        return bandImages;
      case GALLERIES.GIFS:
        return gifImages;
      default:
        return bwImages;
    }
  };

  const [currentImages, setCurrentImages] = useState(getCurrentGalleryImages());
  const [imageKeys, setImageKeys] = useState<(keyof typeof currentImages)[]>(Object.keys(currentImages) as (keyof typeof currentImages)[]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const newImages = getCurrentGalleryImages();
    setCurrentImages(newImages);
    setImageKeys(Object.keys(newImages) as (keyof typeof newImages)[]);
    setCurrentIndex(0); // Reset index to the first image
  }, [activeLink]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageKeys.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='carousel-container'>

      {imageKeys.map((key, index) => (
        <Image
          key={String(key)}
          alt="Carousel Image"
          className={`${index === currentIndex ? 'active' : ''} carousel-image `}
          height={0}
          src={currentImages[key] as string}
          width={0}
        />
      ))}


      <Image
        alt="Left Arrow"
        className="carouselArrowImage leftArrow"
        height={45}
        onClick={handlePrev}
        src={icons.leftArrow}
        width={35}
      />

      <Image
        alt="Right Arrow"
        className="carouselArrowImage rightArrow"
        height={45}
        onClick={handleNext}
        src={icons.leftArrow}
        width={35}
      />
    </div>
  );
};

export default Carousel;
