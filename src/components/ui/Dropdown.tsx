import { useState } from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)} // ✅ Close on mouse leave
    >
      <button
        className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition"
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg border border-gray-200 rounded-md z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(option);
                setIsOpen(false); // ✅ Close on selection
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
