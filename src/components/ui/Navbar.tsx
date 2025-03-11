import Dropdown from './Dropdown';

const Navbar: React.FC = () => {
  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./images/dat-logo.jpg"
            alt="Logo"
            className="h-20 w-20 mr-2 rounded-full"
          />
        <span className="text-xl font-semibold text-gray-800">TDN</span>
       </div>

        {/* ✅ Flex and Spacing with Tailwind */}
        <div className="flex items-center space-x-4">
          <Dropdown
            label="Home"
            options={['Welcome', 'Intro', 'Projects']}
            onSelect={handleSelect}
          />
          <Dropdown
            label="About Me"
            options={['Background', 'Skills', 'Hobbies']}
            onSelect={handleSelect}
          />
          <Dropdown
            label="Education"
            options={['UMSL', 'SCC']}
            onSelect={handleSelect}
          />
          <Dropdown
            label="Timeline"
            options={['2025', '2024']}
            onSelect={handleSelect}
          />
          <a
            href="#contact"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
