
import React, { useEffect, useState } from 'react';
import { Triangle, ArrowRight, User, Home, ShoppingBag, Box, Computer, Sofa, Briefcase, BookOpen, Smartphone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductItem from '@/components/ProductItem';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const productImages = {
  furniture: '/lovable-uploads/7905f4c0-6452-4be5-9f9b-22db2bcf043c.png',
  stationary: '/placeholder.svg',
  electronics: '/placeholder.svg',
  business: '/placeholder.svg',
};

const categoryDisplayData = {
  'furniture': {
    title: 'Sofa cake',
    image: productImages.furniture
  },
  'stationary': {
    title: 'Premium Notes',
    image: productImages.stationary
  },
  'electronics': {
    title: 'Smart Device',
    image: productImages.electronics
  },
  'business supplies': {
    title: 'Office Essentials',
    image: productImages.business
  }
};

const products = [
  {
    id: 1,
    name: 'Worktop',
    dimensions: '110 x 110',
    image: productImages.furniture,
    category: 'furniture',
  },
  {
    id: 2,
    name: 'Couch capsule',
    dimensions: '110 x 110',
    image: productImages.furniture,
    category: 'furniture',
  },
  {
    id: 3,
    name: 'Couch cake',
    dimensions: '110 x 110',
    image: productImages.furniture,
    category: 'furniture',
  },
  {
    id: 4,
    name: 'Ergonomic Chair',
    dimensions: '80 x 120',
    image: productImages.furniture,
    category: 'furniture',
  },
  {
    id: 5,
    name: 'Notebook Pro',
    dimensions: '30 x 21',
    image: productImages.stationary,
    category: 'stationary',
  },
  {
    id: 6,
    name: 'Premium Pens',
    dimensions: '14 x 2',
    image: productImages.stationary,
    category: 'stationary',
  },
  {
    id: 7,
    name: 'Laptop Pro X',
    dimensions: '35 x 25',
    image: productImages.electronics,
    category: 'electronics',
  },
  {
    id: 8,
    name: 'Smart Speaker',
    dimensions: '15 x 15',
    image: productImages.electronics,
    category: 'electronics',
  },
  {
    id: 9,
    name: 'Business Card Holder',
    dimensions: '10 x 6',
    image: productImages.business,
    category: 'business supplies',
  },
  {
    id: 10,
    name: 'Document Organizer',
    dimensions: '35 x 25',
    image: productImages.business,
    category: 'business supplies',
  },
];

const productCategories = [
  { value: 'all', label: 'All Categories', icon: <ShoppingBag size={16} /> },
  { value: 'furniture', label: 'Furniture', icon: <Sofa size={16} /> },
  { value: 'stationary', label: 'Stationary', icon: <BookOpen size={16} /> },
  { value: 'electronics', label: 'Electronics', icon: <Smartphone size={16} /> },
  { value: 'business supplies', label: 'Business Supplies', icon: <Briefcase size={16} /> },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentDisplayCategory, setCurrentDisplayCategory] = useState('furniture');
  
  const categoryValues = productCategories
    .filter(cat => cat.value !== 'all')
    .map(cat => cat.value);
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const intervalTime = 5000; // 5 seconds
    const rotateCategories = () => {
      const currentIndex = categoryValues.indexOf(currentDisplayCategory);
      const nextIndex = (currentIndex + 1) % categoryValues.length;
      const nextCategory = categoryValues[nextIndex];
      
      setCurrentDisplayCategory(nextCategory);
    };

    const intervalId = setInterval(rotateCategories, intervalTime);
    
    return () => clearInterval(intervalId);
  }, [currentDisplayCategory, categoryValues, selectedCategory]);

  useEffect(() => {
    if (selectedCategory !== 'all') {
      setCurrentDisplayCategory(selectedCategory);
      toast({
        title: "Category Changed",
        description: `Viewing ${selectedCategory} products`,
      });
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex justify-center items-center">
      <div className="blob-bg"></div>
      <div className="blob-shape"></div>
      <div className="blob-shape-2"></div>
      
      <div className="w-full max-w-4xl mx-auto relative z-10 animate-fade-in">
        <div className={`bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-700 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Triangle size={16} className="text-purple mr-2" />
                <span className="text-purple text-sm font-medium">
                  {currentDisplayCategory.charAt(0).toUpperCase() + currentDisplayCategory.slice(1)}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                {categoryDisplayData[currentDisplayCategory]?.title || 'Our Products'}
              </h1>
              
              <div className="mt-6 flex items-center justify-center">
                <div className="p-1 w-full">
                  {categoryDisplayData[currentDisplayCategory] && (
                    <div className="flex flex-col items-center">
                      <img
                        src={categoryDisplayData[currentDisplayCategory].image}
                        alt={categoryDisplayData[currentDisplayCategory].title}
                        className="w-full object-contain h-64 md:h-80 animate-float rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
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
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <ProductItem
                      key={product.id}
                      name={product.name}
                      dimensions={product.dimensions}
                      image={product.image}
                      index={index}
                    />
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No products found in this category
                  </div>
                )}
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
      
      <Navbar />
    </div>
  );
};

export default Index;
