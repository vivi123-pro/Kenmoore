import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Static Blurred Background */}
            <img
                src={slides[currentIndex]}
                alt="blurred background"
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
            />

            {/* Main Image with smooth transition */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={`main-${currentIndex}`}
                    src={slides[currentIndex]}
                    alt="slide"
                    className="absolute inset-0 m-auto max-w-[4000px] max-h-full object-contain z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </AnimatePresence>

            {/* Overlay (optional for contrast) */}
            <div className="absolute inset-0 bg-black/30 z-20" />

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-30"
            >
                ‹
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-30"
            >
                ›
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;