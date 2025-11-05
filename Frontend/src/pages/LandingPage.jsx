import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import ImageUploadModal from '../components/ImageUploadModal';
import ScrollToTop from '../components/ScrollToTop';
import LoadingSpinner from '../components/LoadingSpinner';

const LandingPage = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadType, setUploadType] = useState('');
  const [uploadIndex, setUploadIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState({
    hero: null,
    featured: Array(4).fill(null),
    testimonials: Array(3).fill(null)
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageUpload = (file, type, index = null) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (type === 'hero') {
        setImages(prev => ({ ...prev, hero: e.target.result }));
      } else if (type === 'featured' && index !== null) {
        const newFeatured = [...images.featured];
        newFeatured[index] = e.target.result;
        setImages(prev => ({ ...prev, featured: newFeatured }));
      } else if (type === 'testimonials' && index !== null) {
        const newTestimonials = [...images.testimonials];
        newTestimonials[index] = e.target.result;
        setImages(prev => ({ ...prev, testimonials: newTestimonials }));
      }
    };
    reader.readAsDataURL(file);
  };

  const openUploadModal = (type, index = null) => {
    setUploadType(type);
    setUploadIndex(index);
    setIsUploadModalOpen(true);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="landing-page min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header onUploadClick={() => openUploadModal('hero')} isLightBackground={true} />

      <Hero
        backgroundImage={images.hero}
        onUploadClick={() => openUploadModal('hero')}
      />

      <StatsSection />

      <FeaturedProducts
        images={images.featured}
        onUploadClick={(index) => openUploadModal('featured', index)}
      />

      <Testimonials
        images={images.testimonials}
        onUploadClick={(index) => openUploadModal('testimonials', index)}
      />

      <NewsLetter />

      <Footer />

      <ScrollToTop />

      <ImageUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleImageUpload}
        type={uploadType}
        index={uploadIndex}
      />
    </div>
  );
};

export default LandingPage;