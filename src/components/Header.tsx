import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="flex justify-between items-center">
        <button className="nav-link text-white flex items-center gap-2">
          App
          <ArrowRight className="w-4 h-4" />
        </button>
        
        <button className="nav-link text-white flex items-center gap-2">
          IRL
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;