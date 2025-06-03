import { ArrowRight } from 'lucide-react';

const NavigationMenu = () => {
  const menuItems = [
    { label: 'App', href: '/app' },
    { label: 'IRL', href: '/irl' },
    { label: 'Web App', href: '/web-app' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Buy Credits', href: '/buy-credits' },
    { label: 'Your Plan', href: '/your-plan' },
    { label: 'Contact', href: '/contact' },
    { label: 'Instagram', href: '/instagram' },
    { label: 'Support', href: '/support' },
    { label: 'About', href: '/about' }
  ];

  return (
    <nav className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-6">
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-800 pb-4">
              <a 
                href={item.href}
                className="nav-link text-white flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;