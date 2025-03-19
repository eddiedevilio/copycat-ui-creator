
import React from 'react';
import { Sofa, ShoppingBag, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white p-2 rounded-full shadow-lg z-10">
      <NavItem icon={<Sofa size={18} />} active />
      <div className="h-4 w-px bg-gray-200"></div>
      <NavItem icon={<CreditCard size={18} />} />
      <div className="h-4 w-px bg-gray-200"></div>
      <NavItem icon={<ShoppingBag size={18} />} />
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, active }) => {
  return (
    <button 
      className={cn(
        "nav-pill",
        active && "bg-purple text-white"
      )}
    >
      {icon}
    </button>
  );
};

export default Navbar;
