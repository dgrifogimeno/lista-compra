import { useState } from 'react'

interface ListItemProps {
  id: number;
  name: string;
  checked: boolean;
  onDelete: (id: number) => void;
}

export function ListItem({ id, name, checked, onDelete }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const onToggle = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50 shadow-lg rounded-xl px-6 py-4 mb-4 transition-all duration-200">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onToggle}
          className="accent-pink-500 w-6 h-6 rounded focus:ring-2 focus:ring-pink-400 mr-4 transition"
        />
        <span className={`font-bold text-xl ${isChecked ? "line-through text-gray-400" : "text-gray-800"} transition-all duration-200 font-sans`}>
          {name}
        </span>
      </label>
      {onDelete && (
        <button
          onClick={() => onDelete(id)}
          className="ml-4 px-3 py-1 rounded-xl font-bold shadow hover:scale-105"
        >
          ✕
        </button>
      )}
    </div>
  );
}
