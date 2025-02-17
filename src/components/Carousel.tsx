import { useState, useEffect } from 'react';
import { icons, bwImages, colourImages, bandImages } from '../constants/ImageManager';
import { useGlobalContext } from '../context/GlobalContext';

const Carousel: React.FC = () => {
  const { activeGallery } = useGlobalContext();
  
  // Determine which images to show based on activeGallery
  const getCurrentGalleryImages = () => {
    switch (activeGallery) {
      case 'BW Head Shots':
        return bwImages;
      case 'Colour Head Shots':
        return colourImages;
      case 'Bands':
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
      <img
        src={icons.leftArrow}
        alt="Left Arrow"
        className="carouselArrowImage leftArrow"
        onClick={handlePrev}
      />
      <img
        src={icons.rightArrow}
        alt="Right Arrow"
        className="carouselArrowImage rightArrow"
        onClick={handleNext}
      />
      <img 
        src={currentImages[imageKeys[currentIndex]] as string}
        alt="Carousel Image" 
        className="carousel-image" 
      />
    </div>
  );
};

export default Carousel;
