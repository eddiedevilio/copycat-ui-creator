
import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductItemProps {
  name: string;
  dimensions: string;
  image: string;
  index: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, dimensions, image, index }) => {
  return (
    <div 
      className="product-item animate-slide-in" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="product-image animate-float"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </div>
        <div className="text-left">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{dimensions}</p>
        </div>
      </div>
      <button className="add-button hover:scale-105 transition-transform">
        <Plus size={16} />
      </button>
    </div>
  );
};

export default ProductItem;
