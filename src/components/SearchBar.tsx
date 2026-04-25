type Props = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ city, setCity }: Props) => {
  return (
    <input
      type="text"
      placeholder="Enter city name..."
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="w-full px-4 py-3 rounded-xl outline-none text-lg shadow-md bg-white/90 focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;