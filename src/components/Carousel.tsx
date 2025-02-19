import Image from 'next/image';
import { bandImages, bwImages, colourImages, icons } from '../constants/ImageManager';
import { GALLERIES } from '../constants/strings';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Carousel: React.FC = () => {
  const { activeGallery } = useGlobalContext();

  // Determine which images to show based on activeGallery
  const getCurrentGalleryImages = () => {
    switch (activeGallery) {
      case GALLERIES.BW_HEAD_SHOTS:
        return bwImages;
      case GALLERIES.COLOUR_HEAD_SHOTS:
        return colourImages;
      case GALLERIES.BANDS:
        return bandImages;
      default:
        return bwImages;
    }
  };

  const [currentImages, setCurrentImages] = useState(getCurrentGalleryImages());
  const imageKeys = Object.keys(currentImages) as Array<keyof typeof currentImages>;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update images when activeGallery changes
  useEffect(() => {
    const newImages = getCurrentGalleryImages();
    setCurrentImages(newImages);
    setCurrentIndex(0); // Reset index to the first image
  }, [activeGallery]);

  // Navigate to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageKeys.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='carousel-container'>
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
      <Image
        alt="Carousel Image"
        className="carousel-image"
        height={0}
        src={currentImages[imageKeys[currentIndex]] as string}
        width={0}
      />
    </div>
  );
};

export default Carousel;
