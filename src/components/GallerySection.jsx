import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

// Import images
import image1 from '../assets/gallery/1.jpg';
import image2 from '../assets/gallery/2.jpg';
import image3 from '../assets/gallery/3.jpg';
import image4 from '../assets/gallery/4.jpg';
import image5 from '../assets/gallery/5.jpg';
import image6 from '../assets/gallery/6.jpg';
import image7 from '../assets/gallery/7.jpg';
import image8 from '../assets/gallery/8.jpg';
import image9 from '../assets/gallery/9.jpg';
import image10 from '../assets/gallery/10.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (index) => {
    setSelectedImage(index);
    setZoom(1);
    setRotation(0);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    setSelectedImage((prevIndex) => {
      const newIndex = (prevIndex + direction + images.length) % images.length;
      return newIndex;
    });
    setZoom(1);
    setRotation(0);
  };

  const handleZoom = (factor) => {
    setZoom((prevZoom) => Math.max(0.5, Math.min(3, prevZoom + factor)));
  };

  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const animatedStyles = useSpring({
    opacity: selectedImage !== null ? 1 : 0,
    transform: `scale(${zoom}) rotate(${rotation}deg)`,
  });

  return (
    <div>
      <h1 className="text-5xl text-center  font-bold wineFont py-3 pt-[4rem] text-white">Gallery</h1>

    <div className="container mx-auto px-8 my-10 mt-0 py-8 min-h-screen align-center items-center" id='gallery'>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-64"
          >
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {images.map((src, index) => (
              <motion.div
                key={src}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openModal(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <animated.img
                src={images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                style={animatedStyles}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleZoom(0.1)}
                  className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={() => handleZoom(-0.1)}
                  className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={20} />
                </button>
                <button
                  onClick={handleRotate}
                  className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Rotate"
                >
                  <RotateCw size={20} />
                </button>
                <button
                  onClick={closeModal}
                  className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default ImageGallery;