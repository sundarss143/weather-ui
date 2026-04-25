import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { weatherData } from "./data/weatherData";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const result = weatherData.find(
      (item) => item.city.toLowerCase() === city.toLowerCase()
    );

    setWeather(result || null);
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300 flex justify-center items-center px-4">
      <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          🌤 Weather Search
        </h1>

        <SearchBar city={city} setCity={setCity} />

        {weather ? (
          <WeatherCard weather={weather} />
        ) : city ? (
          <p className="text-red-100 mt-4 text-center">
            City not found
          </p>
        ) : (
          <p className="text-white text-center mt-4 opacity-80">
            Search for a city
          </p>
        )}
      </div>
    </div>
  );
}

export default App;