
import React, { useEffect, useState } from 'react';
import { Triangle, ArrowRight, User, Home, ShoppingBag, Box, Computer, Sofa, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductItem from '@/components/ProductItem';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Product images with sample images
const productImages = {
  worktop: '/lovable-uploads/7905f4c0-6452-4be5-9f9b-22db2bcf043c.png',
  capsule: '/placeholder.svg',
  couch: '/placeholder.svg',
};

const products = [
  {
    id: 1,
    name: 'Worktop',
    dimensions: '110 x 110',
    image: productImages.worktop,
    category: 'furniture',
  },
  {
    id: 2,
    name: 'Couch capsule',
    dimensions: '110 x 110',
    image: productImages.capsule,
    category: 'furniture',
  },
  {
    id: 3,
    name: 'Couch cake',
    dimensions: '110 x 110',
    image: productImages.couch,
    category: 'furniture',
  },
  {
    id: 4,
    name: 'Ergonomic Chair',
    dimensions: '80 x 120',
    image: '/placeholder.svg',
    category: 'office supplies',
  },
  {
    id: 5,
    name: 'Laptop Pro X',
    dimensions: '35 x 25',
    image: '/placeholder.svg',
    category: 'electronics',
  },
  {
    id: 6,
    name: 'Luxury Bedding',
    dimensions: '200 x 180',
    image: '/placeholder.svg',
    category: 'hospitality supplies',
  },
];

const productCategories = [
  { value: 'all', label: 'All Categories', icon: <ShoppingBag size={16} /> },
  { value: 'office supplies', label: 'Office Supplies', icon: <Briefcase size={16} /> },
  { value: 'electronics', label: 'Electronics', icon: <Computer size={16} /> },
  { value: 'furniture', label: 'Furniture', icon: <Sofa size={16} /> },
  { value: 'hospitality supplies', label: 'Hospitality', icon: <Box size={16} /> },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Get products for carousel based on category
  const carouselProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                Sofa
                <br />
                cake
              </h1>
              
              <div className="hidden md:block mt-10 relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {carouselProducts.map((product) => (
                      <CarouselItem key={product.id}>
                        <div className="p-1">
                          <div className="flex items-center justify-center p-6">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full max-w-sm object-contain h-48 animate-float"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <div className="pt-2 text-center text-gray-800">
                            <h3 className="font-medium">{product.name}</h3>
                            <p className="text-xs opacity-70">{product.dimensions}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 bg-white/80 hover:bg-white" />
                  <CarouselNext className="right-0 bg-white/80 hover:bg-white" />
                </Carousel>
              </div>
            </div>
            
            {/* Right section */}
            <div className="bg-white rounded-3xl p-6 md:p-8 animate-scale-in">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold">Our products</h2>
                </div>
                <div className="w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 text-xs">😊</span>
                </div>
              </div>
              
              <div className="mb-6">
                <Select 
                  defaultValue="all"
                  onValueChange={(value) => setSelectedCategory(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value} className="flex items-center">
                        <div className="flex items-center gap-2">
                          {category.icon}
                          <span>{category.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">PRODUCT</span>
                <span className="float-right text-xs font-medium text-gray-500 uppercase tracking-wider">NO</span>
              </div>
              
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {filteredProducts.map((product, index) => (
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
