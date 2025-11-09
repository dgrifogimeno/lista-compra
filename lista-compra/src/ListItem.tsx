interface ListItemProps {
  name: string;
  checked: boolean;
  onToggle: (checked: boolean) => void;
  onDelete?: () => void;
}

export function ListItem({ name, checked, onToggle, onDelete }: ListItemProps) {  
    return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50 shadow-lg rounded-xl px-6 py-4 mb-4 transition-all duration-200">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(checked)}
          className="accent-pink-500 w-6 h-6 rounded focus:ring-2 focus:ring-pink-400 mr-4 transition"
        />
        <span className={`font-bold text-xl ${checked ? "line-through text-gray-400" : "text-gray-800"} transition-all duration-200 font-sans`}>
          {name}
        </span>
      </label>
      {onDelete && (
        <button
          onClick={onDelete}
          className="ml-4 px-3 py-1 rounded-xl bg-gradient-to-r from-pink-300 to-yellow-200 text-pink-700 font-bold shadow hover:scale-105 hover:bg-pink-400 transition"
        >
          ✕
        </button>
      )}
    </div>
  );
}
