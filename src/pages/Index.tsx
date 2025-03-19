
import React, { useEffect, useState } from 'react';
import { Triangle, ArrowRight, User, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductItem from '@/components/ProductItem';

// Product images
const productImages = {
  worktop: '/lovable-uploads/7905f4c0-6452-4be5-9f9b-22db2bcf043c.png',
  capsule: '/lovable-uploads/7905f4c0-6452-4be5-9f9b-22db2bcf043c.png',
  couch: '/lovable-uploads/7905f4c0-6452-4be5-9f9b-22db2bcf043c.png',
};

const products = [
  {
    id: 1,
    name: 'Worktop',
    dimensions: '110 x 110',
    image: productImages.worktop,
  },
  {
    id: 2,
    name: 'Couch capsule',
    dimensions: '110 x 110',
    image: productImages.capsule,
  },
  {
    id: 3,
    name: 'Couch cake',
    dimensions: '110 x 110',
    image: productImages.couch,
  },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex justify-center items-center">
      {/* Background effects */}
      <div className="blob-bg"></div>
      <div className="blob-shape"></div>
      <div className="blob-shape-2"></div>
      
      {/* Main container */}
      <div className="w-full max-w-4xl mx-auto relative z-10 animate-fade-in">
        <div className={`bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-700 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left section */}
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Triangle size={16} className="text-purple mr-2" />
                <span className="text-purple text-sm font-medium">Furniture Preview</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                Sofa
                <br />
                cake
              </h1>
              
              <div className="hidden md:block mt-10 relative">
                <img 
                  src={productImages.couch} 
                  alt="Sofa Cake" 
                  className="w-full max-w-sm animate-float"
                />
              </div>
            </div>
            
            {/* Right section */}
            <div className="bg-white rounded-3xl p-6 md:p-8 animate-scale-in">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold">My storehouse</h2>
                </div>
                <div className="w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 text-xs">😊</span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">PRODUCT</span>
                <span className="float-right text-xs font-medium text-gray-500 uppercase tracking-wider">NO</span>
              </div>
              
              <div className="space-y-1">
                {products.map((product, index) => (
                  <ProductItem
                    key={product.id}
                    name={product.name}
                    dimensions={product.dimensions}
                    image={product.image}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="mt-8 flex items-center justify-between">
                <div className="flex space-x-4">
                  <button className="bg-white border border-gray-200 rounded-full p-2">
                    <Home size={16} className="text-gray-700" />
                  </button>
                  <button className="bg-purple rounded-full p-2">
                    <Triangle size={16} className="text-white" />
                  </button>
                  <button className="bg-white border border-gray-200 rounded-full p-2">
                    <User size={16} className="text-gray-700" />
                  </button>
                </div>
                <button className="bg-gray-900 text-white rounded-full p-4 hover:bg-purple-dark transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom navigation */}
      <Navbar />
    </div>
  );
};

export default Index;
